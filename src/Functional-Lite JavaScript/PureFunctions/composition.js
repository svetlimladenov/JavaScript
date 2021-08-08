function sum(x, y) {
    return x + y;
}

function mult(x, y) {
    return x * y;
}

function manualComposition() {
    let z = mult(3, 4);
    z = sum(z, 5);

    console.log(z);

    // pure
    sum(mult(3, 4), 5);

    // manual composition utility
    function multAndSum(x, y, z) {
        return sum(mult(x, y), z);
    }
}

function compose2(fn1, fn2) {
    return function comp() {
        const args = Array.prototype.slice.call(arguments);
        return fn2(fn1(args.shift(), args.shift()), args.shift());
    };
}

const multAndSumComposed = compose2(mult, sum);
console.log(multAndSumComposed(3, 4, 5)); // 17
