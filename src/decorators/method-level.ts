import { caught } from './caught.decorator';
import { timed } from './timed.decorator';

export class A {
  private value = 'some value';

  @timed()
  targetMethod(n: number) {
    const s = [...Array(n)].map(() => Math.sin(Math.random()))
      .reduce((prev, curr) => prev + curr, 0);
    console.log(`The sum is ${s}`);
  }

  @timed()
  anotherMethod() {
    console.log(`The value is '${this.value}'`);
  }

  @timed(500)
  longMethod(n: number) {
    const s = [...Array(n)].map(() => Math.sin(Math.random()))
      .reduce((prev, curr) => prev + curr, 0);
    console.log(`The sum is ${s}`);
  }

  @caught({ sendToServer: true })
  badMethod() {
    ('' as any).sin();
  }

  @caught({ sendToServer: false })
  @timed(500)
  composedMethod(n: number) {
    const s = [...Array(n)].map(() => Math.sin(Math.random()))
      .reduce((prev, curr) => prev + curr, 0);
    console.log(`The sum is ${s}`);
  }
}
