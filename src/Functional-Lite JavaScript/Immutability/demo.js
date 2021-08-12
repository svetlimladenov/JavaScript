const { Map } = require("immutable");

var first = Map({ name: "Ivan" });

var second = first.set("name", "Gosho");

console.log(first === second); // false;

var third = first.set("name", "Ivan");
console.log(first === third);
