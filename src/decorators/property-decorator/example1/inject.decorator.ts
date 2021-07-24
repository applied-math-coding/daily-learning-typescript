export function inject() {
  return (c: { constructor: Function } | Function, fieldName: string) => {
    console.log(c);
    console.log(fieldName);
  }
}