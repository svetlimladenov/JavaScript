const person = {
    name: "ivan",
    age: 15,
    isActive: 111,
};

console.log(person.name);
const age = "age";
console.log(person[age]);

person.city = "Sofia";
person["town"] = 10;

console.log(person["city"]);
console.log(person.town);

const keys = Object.keys(person);
console.log(person[keys[0]]); 
