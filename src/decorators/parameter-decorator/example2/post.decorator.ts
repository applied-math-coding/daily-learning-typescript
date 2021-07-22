import { BODY_KEY } from './body.decorator';

export function post() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const bodyDecoratedArguments: number[] = Reflect.getOwnMetadata(BODY_KEY, target, propertyKey);
    console.log('Arguments with @body decoration are:')
    console.log(bodyDecoratedArguments);
  }
}