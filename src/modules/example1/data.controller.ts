import theDefault, { a as aa, b, h, e, f, fn } from './data.service';
import * as dataService from './data.service';

export function print() {
  console.log(`a is ${aa}`);
  console.log(`b is ${b}`);
  console.log(`default is ${theDefault}`);
  console.log(`e is ${e}`);
  console.log(`f is ${f}`);
  h.prop = 7;
  console.log(`calling the function fn: ${fn()}`);
  console.log(dataService.a);
}

print();