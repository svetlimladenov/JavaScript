/* eslint-disable max-classes-per-file */
class A {}
A.prototype.x = 100;

class B extends A {
    m() {
        return super.x;
    }
}

const b = new B();
console.log(b.m());

console.log(Object.getPrototypeOf(b) === B.prototype);
console.log(Object.getPrototypeOf(B.prototype) === A.prototype);
console.log(Object.getPrototypeOf(B) === A);
console.log(Object.getPrototypeOf(A) === Function.prototype);

function Foo() {}
Foo.prototype.x = 100;

function Bar() {}
Bar.prototype = Object.create(Foo.prototype);
Object.setPrototypeOf(Bar, Foo); // with this step we fully match the classes es6 syntax
Bar.prototype.m = function () {
    return this.x;
};

const c = new Bar();
console.log(c.m());

console.log(Object.getPrototypeOf(c) === Bar.prototype);
console.log(Object.getPrototypeOf(Bar.prototype) === Foo.prototype);
console.log(Object.getPrototypeOf(Bar) === Foo);
console.log(Object.getPrototypeOf(Foo) === Function.prototype);

const myproto = {
    __proto__: { x: 100 },
    m() {
        return super.x;
    }
};
const o = { __proto__: myproto };
o.m(); // returns 100
