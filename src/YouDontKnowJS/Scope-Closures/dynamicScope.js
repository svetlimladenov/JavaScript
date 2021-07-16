function foo() {
    console.log(a); // 2

    // We have a RHS reference look-up, so we check the foo() scope for a identifier,
    // we dont find 'a' identifier in the encosing foo scope
    // we go to the outer scope - the global and we find a
    // we take a value and log it
}

function bar() {
    var a = 3;
    foo();
}

var a = 2;

bar();

// Dynamic scope, by contrast, doesn’t concern itself with how and where
// functions and scopes are declared, but rather where they are called
// from. In other words, the scope chain is based on the call-stack, not
// the nesting of scopes in code

// So if JS has a dynamic scope, rather than a lexical scope
// the above example should have logged 3 (not 2!);

// To be clear, JavaScript does not have a dynamic scope.
// It has lexical scope. Plain and simple.
// But the 'this' mechanist is kind of like dynamic scope,
// Probably because this is bound depending on HOW you are calling a function

// The key contrast: lexical scope is write-time, whereas dynamic scope
// (and this!) are runtime.

// Lexical scope cares where a function was
// declared, but dynamic scope cares where a function was called from.
