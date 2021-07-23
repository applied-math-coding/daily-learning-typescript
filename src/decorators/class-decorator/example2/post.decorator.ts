import { BODY_KEY } from './body.decorator';
import { RESPONSE_KEY } from './response.decorator';

export function post(url: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const posts = target.constructor._posts || [];
    posts.push({
      name: propertyKey,
      url
    });
    target.constructor._posts = posts;
    const bodyDecoratedArguments: number[] = Reflect.getOwnMetadata(BODY_KEY, target, propertyKey) ?? [];
    const responseDecoratedArguments: number[] = Reflect.getOwnMetadata(RESPONSE_KEY, target, propertyKey) ?? [];
    const fn = descriptor.value;
    descriptor.value = function (...[req, res]: [req: Request, res: Response]) {
      const args: any[] = [];
      bodyDecoratedArguments.forEach(idx => args[idx] = req.body);
      responseDecoratedArguments.forEach(idx => args[idx] = res);
      fn.call(this, ...args);
    }
  }
}