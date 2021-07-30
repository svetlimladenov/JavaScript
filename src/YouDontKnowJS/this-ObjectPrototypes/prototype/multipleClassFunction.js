function Foo() {
    //..
}

const a = new Foo();

const b = new Foo();

const c = new Foo();

// all these 3 objects, a [[Prototype]]-linked to the same Foo.prototype object - {}

console.log(Object.getPrototypeOf(a) === Object.getPrototypeOf(b));
console.log(Object.getPrototypeOf(b) === Object.getPrototypeOf(c));
console.log(Object.getPrototypeOf(c) === Foo.prototype);

Foo.prototype.log = function log() {
    console.log("wtf");
};

a.log(); // [[Get]] operation, can't find log directly on 'a', so it goes up the prototype chain and finds it
b.log();
