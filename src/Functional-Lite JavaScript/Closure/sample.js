function foo() {
    let count = 0;
    return function () {
        console.log(++count);
    };
}

const bar = foo();
bar(); // 1
bar(); // 2
bar(); // 3

// it terms of functional programing these are two very importmant concepts
// closure and pure functions
// Here our function has side effects, and produces different results everytime
// Its mutating the count state

function sumX(x) {
    return function (y) {
        return x + y;
    };
}

const sum10 = sumX(10);
console.log(sum10(10)); // 20
console.log(sum10(10)); // 20
console.log(sum10(1)); // 11

// now our function does not change the 'x' 'state', so it does not produce any side effects
