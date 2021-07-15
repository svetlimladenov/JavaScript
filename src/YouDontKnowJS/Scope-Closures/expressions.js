setTimeout(function funcExpression() {
    // named function expression
    console.log("5");
    // throw new Error("bababa");
}, 0);

// funcExpression(); // RHS look-up, since funcExpression is an expression, its not poluting the eclosing scope (global) and it can't be found.
// Reference Error is thrown

// if 'function' is not the first word in an statement, it means its an function expression, otherwise its a function declarataion

setTimeout(function () {
    // anonymous function expression
    console.log(6);
    // throw new Error("ops");
}, 0);

setTimeout(function () {
    console.log("recursion");
    arguments.callee(); // thata the only way to make a recursion with anonymout func expression, thats why its better to just give it a name
}, 0);
