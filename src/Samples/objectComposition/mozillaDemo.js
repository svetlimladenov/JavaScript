function createPerson(name) {
    return {
        name,
        greeting() {
            console.log(`Hi my name is ${this.name}`);
        },
    };
}

const ivan = createPerson("Ivan");
ivan.greeting();

function Person(name) {
    this.name = name;
    this.greeting = function greeting() {
        console.log(`Hi! I'm ${this.name}.`);
    };
}

Person.prototype.goodbye = function goodbye() {
    console.log(`Good bye from ${this.name}`);
};

const goshe = new Person("Goshe");
goshe.greeting(); // the method belongs to the object it self, not very good because the function greeting is being created everytime
goshe.goodbye(); // the method belogns to the objects __proto__, better because the function is being created just once

console.log(Object.prototype.hasOwnProperty.call(goshe, "name"));
console.log(Object.prototype.hasOwnProperty.call(goshe, "greeting"));
console.log(Object.prototype.hasOwnProperty.call(goshe, "goodbye"));

const o = {
    name: "Ivan",
    getName() {
        return this.name;
    },
};
