function foo() {
    console.log(this.a);
}

const obj = {
    a: 2,
    foo,
    test() {
        console.log(1);
    }
};

obj.foo();

// when foo(..) is called, an object reference to obj is made.
// when there is a context object for a function reference
// the implicit binding rule says that it's that object( obj )
// that should be used for the function calls 'this' binding

// method

function bar() {
    console.log(this.a);
}
const obj2 = {
    a: 42,
    bar
};

const obj1 = {
    a: 2,
    obj2
};

obj1.obj2.bar(); // 42
// We have a property reference chain
// only the top/last (obj2) level of the chain matters to the call-site

// Imlicitly lost
function baz() {
    console.log(this.a);
}

const lost = {
    a: 2,
    baz
};

var bar = lost.baz; // function reference/alias!
bar(); // "oops, global"
