import { BODY_KEY } from './body.decorator';

export function post() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const bodyDecoratedArguments: number[] = Reflect.getOwnMetadata(BODY_KEY, target, propertyKey) ?? [];
    const fn = descriptor.value;
    descriptor.value = function (...[req, res]: [req: Request, res: Response]) {
      const args: any[] = [];
      bodyDecoratedArguments.forEach(idx => args[idx] = req.body);
      fn.call(this, ...args);
    }
  }
}