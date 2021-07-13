const cow = {
    name: "Gana",
    age: 12,
    weight: 500,
};

const another = Object.create(cow);

console.log(Object.prototype.hasOwnProperty.call(another, "age"));

const foo = {};
console.log(foo.__proto__ === Object.prototype);
console.log(foo.__proto__ === Object);

function Animal(name) {
    this.name = name;
}

const cat = new Animal();

console.log(cat.__proto__ === Animal.prototype);
console.log(cat.__proto__ === Animal);
