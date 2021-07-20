import { caught } from './caught.decorator';
import { log } from './log.decorator';

export class A {

  @caught({ sendToServer: false })
  @log()
  targetMethod(s: string) {
    console.log(`Method is being called with parameter '${s}'`);
    if (s === 'throw') {
      throw new Error('error message goes here');
    }
  }
}

const a = new A();
// a.targetMethod('Hello');
a.targetMethod('throw');
