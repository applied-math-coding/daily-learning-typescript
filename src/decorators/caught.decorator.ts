export function caught({ sendToServer }: { sendToServer: boolean }) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const fn = descriptor.value;
    descriptor.value = function (...args: any[]) {
      try {
        fn.call(this, ...args);
      } catch (e) {
        console.log(`Handling error of call to method '${propertyKey}'`);
        console.error(e.message);
        sendToServer && console.log('... and sending to server');
      }
    }
  };
}