const objectAssign = (filter: ([k, v]: [string, any]) => boolean = ([, v]) => v !== undefined) => (
  target: object,
  ...sources: object[]
) =>
  Object.assign(
    target,
    ...sources.map(x =>
      Object.entries(x)
        .filter(filter)
        .reduce<Record<string, any>>((obj, [k, v]) => {
          // eslint-disable-next-line no-param-reassign
          obj[k] = v;
          return obj;
        }, {})
    )
  );

export default objectAssign;
