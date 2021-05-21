const foo = (function bar() {
    let counter = 1;
    return function buz() {
        console.log(counter += 1);
    };
}());

foo();
foo();