const strPrimitive = "I am a str";
console.log(typeof strPrimitive); // string
console.log(strPrimitive instanceof String); // false

const strObject = new String("I am a str");
console.log(typeof strObject); // object
console.log(strObject instanceof String); // true

// inspect the object sub-type
console.log(Object.prototype.toString.call(strObject)); // [object String]

const prefix = "prefix";

const obj = {
    [prefix + "name"]: "ivan"
};

console.log(obj);
