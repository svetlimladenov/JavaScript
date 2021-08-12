const { Map, List } = require("immutable");

function memoize(fn) {
    let prevArg;
    let prevResult;

    return function (arg) {
        if (arg === prevArg) {
            return prevResult;
        }

        prevArg = arg;
        prevResult = fn.call(this, arg);
        return prevResult;
    };
}

function rawSum(list) {
    return list.reduce((prev, cur) => prev + cur, 0); // when called on List, its actually another function,
}

// with mutable data, we have problems with the memoization
function withNormalList() {
    const sum = memoize(rawSum);

    const array = new Array(100000).fill(1);

    console.time("first");
    console.log(sum(array));
    console.timeEnd("first");

    console.time("second");
    console.log(sum(array));
    console.timeEnd("second");

    array.push(1);
    console.time("3");
    console.log(sum(array)); // wrong result
    console.timeEnd("3");
}

withNormalList();

// with immutable data we dont have problems with the memoization
function withImmutableList() {
    const sum = memoize(rawSum);

    let list = List(Array(100000).fill(1));

    console.time("first");
    console.log(sum(list));
    console.timeEnd("first");

    console.time("second");
    console.log(sum(list));
    console.timeEnd("second");

    list = list.push(1);
    console.time("3");
    console.log(sum(list)); // yey it works now
    console.timeEnd("3");
}

withImmutableList();
