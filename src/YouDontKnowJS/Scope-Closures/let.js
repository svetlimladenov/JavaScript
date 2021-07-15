function test() {
    if (true) {
        let a = 1;
    }

    console.log(a); // ReferenceError: since we are using the let keyword, the variables is bound to the if block scope
}

// test();

function foo() {
    {
        let a = 1;
    }

    console.log(a); // Again ReferenceError: a is not defined
}

// foo();

function baz() {
    console.log(a); // Reference Error: Cannot access 'a' before initialization
    let a = 1;
}

baz();
