const person = new Map([["key","value"]]);

person.set("firstName", "Pesho");

console.log(person.get("key"));

const company = new Set();
company.add("person");
company.add("person");
company.add("test");

company.forEach(x => console.log(x));