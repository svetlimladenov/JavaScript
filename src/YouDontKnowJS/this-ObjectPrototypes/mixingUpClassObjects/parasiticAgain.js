function Animal(name) {
    this.name = name;
    this.sleepHours = 8;
}

Animal.prototype.eat = function eat(food) {
    console.log(`${this.name} is eating ${food}`);
};

Animal.prototype.sleep = function sleep() {
    console.log(`Sleeping for ${this.sleepHours} hours`);
};

function Cat() {
    let cat = new Animal("cat");

    cat.sleepHours = 12;

    return cat;
}

const myCat = Cat();
myCat.eat("fish");
myCat.sleep();

function Dog() {
    let dog = new Animal("dog");

    const baseSleep = dog.sleep;
    dog.sleep = function sleep() {
        baseSleep.call(this);
        console.log("Bow I can sleep this much");
    };

    return dog;
}

const dog = Dog();
dog.sleep();

function Spider() {
    let spider = new Animal("spider");

    const animalEat = spider.eat;

    spider.eat = function eat() {
        // polymorphism
        animalEat.call(this, "bugs");
    };

    return spider;
}

const spider = new Spider();
spider.eat();

Animal.prototype.eat = function () {
    console.log("no longer eating");
};

spider.eat(); // it does not matter that we changed the Animal.prototype.eat function
// our spider.eat(..) is using the animalEat, accessing it via closure, and it remaininng the original function attached
