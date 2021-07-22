import { body } from './body.decorator';
import { post } from './post.decorator';

export class A {

  @post()
  targetMethod(@body() param1: any, param2: any) {
    console.log('param1 is:');
    console.log(param1);
    console.log('param2 is:');
    console.log(param2);
  }
}



