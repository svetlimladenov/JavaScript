/* eslint-disable no-use-before-define */
function impure() {
    let y = 5;
    let z;

    function foo(x) {
        y += 1;
        z = x * y;
    }

    foo(20);
    console.log(z); // 120

    foo(20);
    console.log(z); // 140
}

// Exercise 1: Make a bar() wrapper, that turns this program into pure program

function wrapInpureWithPure() {
    function bar(x, y) {
        let z;
        foo(x);
        return [y, z];

        function foo(x) {
            y += 1;
            z = x * y;
        }
    }

    let xArg = 20;
    let yArg = 5;
    let [y, z] = bar(xArg, yArg); // [6, 120]
    console.log(z);

    let [a, b] = bar(xArg, yArg); // [6, 120]
    console.log(b);

    let [c, d] = bar(xArg, a);
    console.log(d);
}

wrapInpureWithPure();
