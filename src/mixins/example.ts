type ConstructorType = new (...args: any[]) => any;
const registry = new Map<ConstructorType, object>();

function service(Fn: ConstructorType) {
  return class B extends Fn {
    private register() {
      registry.set(B, this);
    }

    constructor() {
      super();
      this.register();
    }
  }
}

@service
class A { };

(new A());
console.log(registry.get(A));