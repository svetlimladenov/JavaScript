// Our DMZ object
const ø = Object.create(null);

function foo(a, b) {
    console.log(a, b);
}

// currying with `bind(..)
const bar = foo.bind(ø, 4);
bar(2);

// spreading out array as parameters
foo.apply(ø, [1, 5]);
