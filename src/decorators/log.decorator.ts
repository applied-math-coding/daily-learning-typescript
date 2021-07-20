export function log() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const oldValue = descriptor.value;
    descriptor.value = (a: string) => {
      console.log(`The method with name '${propertyKey}' will be called`)
      oldValue(a);
      console.log(`The method with name '${propertyKey}' was called with parameter '${a}'`);
    }
  };
}