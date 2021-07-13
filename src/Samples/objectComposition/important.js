const foo = {};

console.log(foo.__proto__ === Object.prototype); // true
console.log(foo.__proto__ === Object); // false

console.log(Object === Object.prototype);

function MyObject() {
};

MyObject.prototype.hasProperty = function hasProperty() {
    console.log("has property");
};

MyObject.staticMethod = function staticMethod() {
    console.log("static method");
};

const newObj = new MyObject(); // new creates a new object with its __proto__ being MyObject
newObj.hasProperty();
console.log(newObj.__proto__ === MyObject.prototype); 

MyObject.staticMethod();

const secondObj = new Object();
secondObj.name = "test";
secondObj.hasOwnProperty("name"); // has own property is taken from Object.prototype

Object.keys({name: "Ivan"}); // Object.keys is static method from Object
