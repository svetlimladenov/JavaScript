// function foo() {
//     return 42;
// }

// function bar() {
//     return 10;
// }

// exercise 4, replace foo a bar
// hint for the async workshop - thats called a thunk
function getVal(val) {
    return function () {
        return val; // here our closure again
    };
}

function add(x, y) {
    return x + y;
}

function add2(fn1, fn2) {
    return add(fn1(), fn2());
}
// why make add2(..) use add(..), rather than just do its own addition ?
// In functional programming you see this all the time
// Everything, every abstraction that you define is a combination, composition
// of some lower lever abstractions
// So why repeat the plus operation, when I already have a functions that can compute that ?

console.log(add2(getVal(42), getVal(10)));

function addN(...args) {
    if (args.length <= 2) {
        return getVal(add2(args[0], args[1]));
    }

    return add2(args[0], addN(...args.slice(1)));
}

console.log(addN(getVal(10), getVal(10), getVal(5)));

function addNLoop(...args) {
    let total = 0;
    for (let i = 0; i < args.length - 1; i++) {
        total += add2(getVal(total), args[i]);
    }

    return total;
}

console.log(addNLoop(getVal(10), getVal(10), getVal(10)));

function addMapReduce(...arr) {
    const solution = arr.slice(1).reduce((acc, cur) => {
        return function () {
            return add2(acc, cur);
        };
    }, arr[0]);

    return solution();
}

let arr = [10, 15, 15, 10, 25, 25];

function isOdd(x) {
    return x % 2 === 1;
}

function isEven(x) {
    return !isOdd(x);
}

// var isEven = composeNeg(isOdd);  composeNeg(..) if we see that we do this kind of composition, we can define this utility(..)
// thats what functional programming languages are doing, they predifine functions like this, that are used a lot

arr = arr.filter(isEven).map(getVal);

console.log(addMapReduce(...arr)); // 40
