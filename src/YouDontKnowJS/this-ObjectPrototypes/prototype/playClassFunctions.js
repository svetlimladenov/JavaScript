function Person(name, age) {
    this.name = name;
    this.age = age;
    this.walk = function walk() {
        console.log(`${this.name} is walking`);
    };
}

Person.prototype.run = function run() {
    console.log(`${this.name} is running very fast`);
};

const ivan = new Person("ivan", 21);

const goshe = new Person("goshe", 22);

goshe.run();
ivan.run();

// this.name works, because we call it with an implicit binding

// run is taken from the [[Prototype]]

goshe.walk();
ivan.walk();

// both objects have direcly the walk(..) function
