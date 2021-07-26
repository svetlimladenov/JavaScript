function foo(title, firstName, lastName) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
}

const ivan = new foo("gospodin", "Ivan", "Petrov");
const goshe = new foo("gospodin", "Goshe", "Goshov");

const petur = new foo("gospodin", "Petyr", "Petrov");

console.log(ivan.title);

// using `null` here because we don't care about
// the `this` hard-binding in this scenario, and
// it will be overridden by the `new` call anyway!
const easierWay = foo.bind(null, "gospodin");

const emil = new easierWay("Emil", "mld");

console.log(emil.title);
