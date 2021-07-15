a = 2;
var a;
console.log(a);

// foo(); // var foo, is hoisted, but it still doesnt have a value, its undefined, so thats why its a TypeError, foo is not a function, because foo is undefined
// its like calling undefined()

var foo = function bar() {
    // the function expression is not being hoisted
};

myCoolModule();
// bar(); // Reference error, even though its a named function expression its still not available in the enclosing scope
