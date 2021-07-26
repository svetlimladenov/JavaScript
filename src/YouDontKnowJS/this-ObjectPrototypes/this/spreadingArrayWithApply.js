function foo(a, b, c, d) {
    console.log(c);
}

const arr = [1, 2, 3, 4];

foo.apply(null, arr); // EsLint: Use the spread operator instead of apply

foo(...arr); // Since ES6 syntax
