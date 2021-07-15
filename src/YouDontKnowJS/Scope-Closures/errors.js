function foo() {
    console.log(b); // RHS look-up, can't find it in the current scope, and also in the global scope so ReferenceError is thrown
}

// foo();

function bar() {
    "use strict";
    c = 5; // LHS look-up, can't find it in any scope, it gets to the global and the global scope creates the C variable and gives it to the engine (If not running in strict mode)
}

bar();
console.log(c);

var a = 1;
