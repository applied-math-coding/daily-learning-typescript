import "reflect-metadata";

export const RESPONSE_KEY = 'responseKey';

export function response() {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const bodyDecoratedArguments: number[] = Reflect.getOwnMetadata(RESPONSE_KEY, target, propertyKey) ?? [];
    bodyDecoratedArguments.push(parameterIndex);
    Reflect.defineMetadata(RESPONSE_KEY, bodyDecoratedArguments, target, propertyKey);
  }
}