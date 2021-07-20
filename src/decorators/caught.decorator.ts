export function caught({ sendToServer }: { sendToServer: boolean }) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const oldValue = descriptor.value;
    descriptor.value = (a: string) => {
      try {
        oldValue(a);
      } catch (e) {
        console.log(`Handling error of call to method '${propertyKey}'`);
        console.error(e.message);
        sendToServer && console.log('... and sending to server');
      }
    }
  };
}