function Person(title, firstName, lastName) {
    this.title = title; // we called with a constructor call, with new, this is bound to the brand new object, so we stick these props to the new object
    this.firstName = firstName;
    this.lastName = lastName;
}

const goshe = new Person("gn", "Ivan", "Ivanov");

const GnPerson = Person.bind(null, "gn"); // currying, its not required to be on a constuctor calls, we can curry normal calls of functions as well
// we pass null, but it really doesnt matter
// but it really does not matter, because as we saw
// new binding will override the hard-binding (bind(..))

const ivan = new GnPerson("Goshe", "Goshov");

console.log(ivan);
console.log(goshe);

function log(a, b, c) {
    console.log(a, b, c);
}

const args = [1, 2, 3];

log.apply(null, args); // spead out an array using the apply(..) function
log(...args); // prefer the spead operator
