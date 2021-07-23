export function controller({ url, secure }: { url: string; secure: boolean }) {
  return (Fn: Function) => {
    (Fn as any)._controller = {
      url, secure
    };
  }
}