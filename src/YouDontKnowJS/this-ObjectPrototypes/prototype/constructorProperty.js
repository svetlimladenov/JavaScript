function Foo() {
    //...
}

console.log(Foo.prototype.constructor === Foo); // true

const a = new Foo();
console.log(a.constructor === Foo); // true

Foo.prototype = {};

const b = new Foo();
console.log(b.constructor === Foo); // false
console.log(b.constructor === Object); // true

// its WRONG AND BAD to think that b.constuctor means "was constructed by"
// as we can see, b.constructor now points to Object, but Object did not compose our object

// what happend with a.constructor
// 1. cant find a.construcor directly
// 2. go to the [[Prototype]] chain, and there is the Foo.prototype object, which has the .constructor property

// what happend next with b.constructor
// 1. cant find a.constructor directly
// 2. go to the [[Prototype]] chain, and there is the Foo.prototype object, which we replaced and not is an empty obj {} , cant find .constructor property
// 3. go to the [[Prototype]] chain, and finally find a .constructor on the Object object
