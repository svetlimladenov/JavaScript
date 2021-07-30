function Foo() {
    // ...
}

const a = new Foo();

console.log(Foo.prototype); // {}

console.log(a.prototype); // undefined

console.log(Object.getPrototypeOf(a) === Foo.prototype); // true
console.log(a.__proto__ === Foo.prototype); // true
console.log(Object.getPrototypeOf(a) === a.__proto__); // true

// 1. A brand new object is created (aka constructed) out of thin air.
// 2. The newly constructed object is [[Prototype]]-linked.
// 3. The newly constructed object is set as the this binding for that
// 4. Unless the function returns its own alternate object, the new-invoked
// function call will automatically return the newly constructed object.

const obj = {};
console.log(obj.prototype);
console.log(Object.getPrototypeOf(obj));
