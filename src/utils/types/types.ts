// adapted from https://github.com/microsoft/TypeScript/issues/1897

export type primitive = null | boolean | number | string | undefined;

type DefinitelyNotJsonable = (...args: any[]) => any;

export type IsJsonable<T = Record<string | number, primitive>> =
  // Check if there are any non-jsonable types represented in the union
  // Note: use of tuples in this first condition side-steps distributive conditional types
  // (see https://github.com/microsoft/TypeScript/issues/29368#issuecomment-453529532)
  [Extract<T, DefinitelyNotJsonable>] extends [never]
    ? // Non-jsonable type union was found empty
      T extends primitive
      ? // Primitive is acceptable
        T
      : // Otherwise check if array
      T extends (infer U)[]
      ? // Arrays are special; just check array element type
        IsJsonable<U>[]
      : // Otherwise check if object
      T extends object
      ? // It's an object
        {
          // Iterate over keys in object case
          [P in keyof T]: IsJsonable<T[P]>; // Recursive call for children
        }
      : // Otherwise any other non-object no bueno
        never
    : // Otherwise non-jsonable type union was found not empty
      never;
