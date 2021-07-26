const obj = {
    a: 2,
    address: {
        name: "Home"
    },
    speak: function speak() {
        console.log(this.name);
    },
    movies: [1, 2, 3]
};

// Copy the values of all of the enumerable own properties
// from one or more source objects to a target object.
// Returns the target object.

const newObj = Object.assign(
    {
        name: "Ivan"
    },
    obj
);

obj.address.name = "Away";
console.log(newObj);
newObj.speak();

const newObj2 = { ...obj };
console.log(newObj2);
