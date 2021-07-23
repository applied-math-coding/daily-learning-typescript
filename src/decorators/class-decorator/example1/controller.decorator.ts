export function controller({ url, secure }: { url: string; secure: boolean }) {
  return (Fn: (new (...args: any[]) => any)) =>
    class extends Fn {
      constructor(...args: any[]) {
        super(...args);
        console.log(url);
        console.log(secure);
        console.log(this.n);
      }
    } as typeof Fn;
}