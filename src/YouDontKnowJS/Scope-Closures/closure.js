function myCoolModule() {
    var a = 1;
    function bar() {
        console.log(a);
    }

    bar();
}

myCoolModule();

function delay(message) {
    setTimeout(() => {
        console.log(message); // we have a closure to the delay inner author time lexical scope, so even when the 1000 ms pass, and we execute timer(), it still has access to the lexical scope
    }, 1000);
}

delay("hello closure");

function forClosureVar() {
    for (var i = 0; i < 10; i += 1) {
        // i is declared in the forClosureVar scope
        setTimeout(() => {
            console.log(i); // we have a closure on 'forClosureVar' lexical scope. So every callback created will have closure to the same i variable
        }, i * 1000);
    }
}

forClosureVar();

function forClosureLet() {
    for (let i = 0; i < 10; i += 1) {
        // let i, is bound to the block scope of the for loop, and is rebound to each iteration
        setTimeout(() => {
            console.log(i); // we have closure for each i block scope
        }, i * 1000);
    }
}

forClosureLet();

function forClosureIIFE() {
    for (var i = 1; i <= 5; i += 1) {
        (function () {
            var j = i; // the IIFE creates a new scope for each iteration, and creates a new j variable for each scope
            setTimeout(() => {
                console.log(j); // we have closure on the IIFEs scopes
            }, j * 1000);
        })();
    }
}

forClosureIIFE();

// The use of an IIFE inside each iteration created a new scope for each
// iteration, which gave our timeout function callbacks the opportunity
// to close over a new scope for each iteration, one which had a variable
// with the right per-iteration value in it for us to access.

for (var i = 0; i < 10; i += 1) {
    ((j) => {
        setTimeout(() => {
            console.log(j);
        }, 0);
    })(i);
}
