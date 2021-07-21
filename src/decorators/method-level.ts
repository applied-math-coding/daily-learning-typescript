import { caught } from './caught.decorator';
import { timed } from './timed.decorator';

export class A {
  private value = 'some value';

  @timed()
  targetMethod(n: number) {
    [...Array(n)].map(() => Math.sin(Math.random()));
  }

  @timed()
  anotherMethod() {
    console.log(`The value is '${this.value}'`);
  }

  @timed(500)
  longMethod(n: number) {
    [...Array(n)].map(() => Math.sin(Math.random()));
  }

  @caught({ sendToServer: true })
  badMethod() {
    ('' as any).sin();
  }
}
