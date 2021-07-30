function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function () {
    console.log("Eating");
};

function Cat(name) {
    Animal.call(this, name);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.meow = function meow() {
    console.log("Meow!");
};

const cat = new Cat("darko");

cat.eat();
cat.meow();

const sample = {
    name: "darko",
    // our sample object is automatically [[Prototype]]-linked to this object (Cat.prototype)
    __proto__: {
        // our Cat.prototype object is [[Prototype]]-linked to this object (Animal.prototype) because of the Object.create(..)
        meow() {
            console.log("Meow!");
        },
        __proto__: {
            eat() {
                console.log("Eating");
            },
            constructor() {}
        }
    }
};

sample.eat(); // this actually workds :O
sample.meow();

function Dog(name) {
    Animal.call(this, name);
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);
// ES6+, with Dog.prototype = Object.create(Animal.prototype) we throw away the already existing object set to Dog.prototype
// This way we do not do this, we just set the already existing Dog.prototype object [[Prototype]]
// Similar to Dog.prototype.__proto__ = Animal.prototype

Dog.prototype.bark = function bark() {
    console.log("Bark bark!");
};

const dog = new Dog("kuncho");

dog.eat();
dog.bark();

function Spider() {
    Animal.call(this, "spiderman");
}

Spider.prototype.__proto__ = Animal.prototype; // its still workds but __proto__ is deprecated and can be dependant on

Spider.prototype.makeWeb = function makeWeb() {
    console.log("Makiing a weeb!!!");
};

const spiderman = new Spider();
spiderman.makeWeb();
spiderman.eat();
