import { inject } from './inject.decorator';

export class A {

  @inject()
  service: any;

  targetMethod() {
  }
}