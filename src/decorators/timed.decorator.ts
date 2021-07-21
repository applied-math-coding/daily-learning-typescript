export function timed(maxTime?: number) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const fn = descriptor.value; // obtaining a reference to the function (rather than to the method!)
    descriptor.value = function (...args: any[]) { // collecting arguments by rest-operator
      const t0 = Date.now();
      fn.call(this, ...args);  // calling with arguments by using spread-operator
      const now = Date.now();
      const duration = now - t0;
      if (duration > (maxTime ?? 10)) {
        console.log('Function call took long:');
        console.log(`Property name: ${propertyKey}`);
        console.log(`Arguments:`);
        console.log(args);
      } else {
        console.log(`Took just ${duration}ms`);
      }
    }
  };
}