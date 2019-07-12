const objectAssign = (target: object, ...sources: object[]) =>
  Object.assign(
    target,
    ...sources.map(x =>
      Object.entries(x)
        .filter(([, v]) => v !== undefined)
        .reduce<Record<string, any>>((obj, [k, v]) => {
          // eslint-disable-next-line no-param-reassign
          obj[k] = v;
          return obj;
        }, {})
    )
  );

export default objectAssign;
