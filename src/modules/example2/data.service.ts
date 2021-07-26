export const a = 1;  // export a constant

export let b = 2;  // export a variable

export var c = 'g';  // export a variable

const d = 3;
export default d;   // export a default value (only one is allowed)

const e = 4;
export { e };   // export constant with object-syntax

const f = 5;
export { f };    // this one adds 'f' to the exported object, making it {e,f}

export function fn() { };  // export a function

export const g = () => { };  // export an arrow-function

export const h = { prop: 6 };  // export an object

export class A { };  // export a class

