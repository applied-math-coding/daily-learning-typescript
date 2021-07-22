import { body } from './body.decorator';

export class A {

  targetMethod(@body() param1: any, param2: any) {
  }
}



