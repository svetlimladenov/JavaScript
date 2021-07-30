function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function myName() {
    return this.name;
};

function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.myLabel = function myLabel() {
    return this.label;
};

const a = new Bar("Ivan", "gospodin");

console.log(a.myLabel()); // myLabel(..) is found on the [[Prototype]] chain on the Bar.prototype object
console.log(a.myName()); // myName(..) is found on the [[Prototype]] chain on the Foo.prototype object

console.log(Object.getPrototypeOf(a) === Bar.prototype); // true
console.log(Object.getPrototypeOf(Bar.prototype) === Foo.prototype); // true
