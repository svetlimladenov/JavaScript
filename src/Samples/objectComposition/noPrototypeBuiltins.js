const obj = {
    hasOwnProperty: 1,
    test() {
        console.log(5);
    },
};

const foo = Object.create(obj);
foo.name = "Ivan";

console.log(Object.prototype.hasOwnProperty.call(foo, "name")); // true

console.log(foo.hasOwnProperty("name")); // will throw, thats why we should NOT call Object.propotype methods directly from the object
