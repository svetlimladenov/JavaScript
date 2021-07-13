// write some code and hide it inside a function scope
function foo() {
    var a = "foo";
    console.log(a);
}

foo();
// console.log(a); a will be hiden in the scope of foo, but we polute the global scope with the foo identifier

(function bar() {
    var b = "bar";
    function innerHiddenFunction() {
        console.log(b);
    }
    innerHiddenFunction();
})();

// innerHiddenFunction(); // Reference Error, hidden inside bar
// console.log(b); // Reference Error: b is not defined, so b is hidded inside bar
// bar(); // Reference Error: bar is not defined, we did not polute the global scope with the bar identifier

// IIFE - imediatly invoked function expression
// If `funcition` is the very first thing in the statement, then is's a function declaration, otherwise its a function expression

// here we have '(' before `function`, so its a function expression

// Different forms of IIFEs

(function baz() {
    console.log("inside baz");
})();

(function baz() {
    console.log("inside baz");
})(); // the invoking part is moved inside the outer (), eslint(wrap-iife)
// This rule requires all immediately-invoked function expressions to be wrapped in parentheses

var window = {
    a: 2,
};

// https://github.com/umdjs/umd
(function IIFE(def) {
    def(window);
})(function def(global) {
    var a = 3;
    console.log(a); // 3
    console.log(global.a); // 2
});
