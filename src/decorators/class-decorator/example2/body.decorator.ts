import "reflect-metadata";

export const BODY_KEY = 'bodyKey';

export function body() {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const bodyDecoratedArguments: number[] = Reflect.getOwnMetadata(BODY_KEY, target, propertyKey) ?? [];
    bodyDecoratedArguments.push(parameterIndex);
    Reflect.defineMetadata(BODY_KEY, bodyDecoratedArguments, target, propertyKey);
  }
}