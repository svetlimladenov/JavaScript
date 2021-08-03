const Foo = {
    bar() {
        // concise methods,
        console.log("bar");
        throw new Error("the func is visible in the stack trace");
    },
    baz: function baz() {
        console.log("baz");
    }
};

Foo.bar();
// Error: the func is visible in the stack trace
// at Object.bar

// de-sugared, bar becomes an anomymous function expression

const Foo1 = {
    bar: function () {
        // consise methods,
        console.log("bar");
    },
    baz: function baz() {
        console.log("baz");
    }
};
