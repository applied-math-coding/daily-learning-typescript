export function body() {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log(`Parameter index is ${parameterIndex}`);
  }
}