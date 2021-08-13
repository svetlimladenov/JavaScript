function foo(x, y) {
    return function () {
        return x + y;
    };
}

const bar = foo(1, 2, 3, 5);
console.log(bar());
console.log(bar());
console.log(bar());

function sumRecur(...args) {
    if (args.length <= 2) {
        return args[0] + args[1];
    }

    return args[0] + sumRecur(...args.slice(1));
}

console.log(sumRecur(1, 2, 3, 4, 5));

function dotDotDotArgs(...args) {
    console.log(args); // [ 1, 2, 3, 5, 'test' ]
}

dotDotDotArgs(1, 2, 3, 5, "test");

function dotDotDotSpread(a, b, c, d) {
    console.log(a, b, c, d);
}

dotDotDotSpread(...[1, 2, 3, 4]);

function mult(x, y, z) {
    return x * y * z;
}

console.log(mult(3, 4, 5)); // 60

function multReduce(...args) {
    return args.reduce((a, b) => a * b);
}

console.log(multReduce(3, 4, 5, 2)); // 120

function multIter(...args) {
    let res = 1;
    for (let i = 0; i < args.length; i++) {
        res *= args[i];
    }
    return res;
}

console.log(multIter(3, 4, 5, 3)); // 180

function multRecursive(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }

    return args[0] * multRecursive(...args.slice(1));
}

console.log(multRecursive(3, 4, 5, 3)); // 180
