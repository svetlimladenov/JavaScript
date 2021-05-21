let a = 10;

function foo(n) {
    n = 100;
}

foo(a);
console.log(a);


let person = { userName : "Ivan" };
function bar(obj) {
    obj.userName = "Goshe";
}

console.log(person.userName);
bar(person);
console.log(person.userName);