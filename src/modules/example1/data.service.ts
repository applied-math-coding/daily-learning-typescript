export const a = 1;  // exports a constant

export let b = 2;  // exports a variable

export var c = 'g';  // exports a variable

const d = 3;
export default d;   // exports a default value (only one is allowed)

const e = 4;
export { e };   // exports a constant with object-syntax

const f = 5;
export { f };    // this one adds 'f' to the exported object, making it {e,f}

export function fn() { };  // exports a function

export const g = () => { };  // exports an arrow-function

export const h = { prop: 6 };  // exports an object

export class A { };  // exports a class

