function simpleModule() {
    const arr = [];
    return function add(element) {
        arr.push(); // here we have a closure on the simpleModule lexical scope
    };
}

const foo = simpleModule();
foo("123");
foo(1);
