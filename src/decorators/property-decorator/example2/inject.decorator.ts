export function inject(Fn: (new () => any)) {
  return (c: { constructor: Function }, fieldName: string) => {
    const injections = (c.constructor as any)._injections || [];
    injections.push({
      fieldName,
      Fn
    });
    (c.constructor as any)._injections = injections;
  };
}