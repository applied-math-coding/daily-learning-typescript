import { controller } from './controller.decorator';

@controller({ url: '/target-method', secure: false })
export class A {
  n: number;

  constructor(n: number) {
    this.n = n;
  }
}