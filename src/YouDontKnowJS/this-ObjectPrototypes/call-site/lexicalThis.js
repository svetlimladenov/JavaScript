function foo() {
    // return an arrow function
    return (a) => {
        // 'this' here is lexically inherited from 'foo()';
        console.log(this.a);
    };
}

const obj1 = { a: "obj1" };
const obj2 = { a: "obj2" };

const bar = foo.call(obj1);
bar.call(obj2);

// How I think it work before actually reading it
// So when we make an RHS reference look up for this
// inside the arrow function, we dont find it in the
// scope of the arrow function, so we go to the foo function
// and take the 'this' from there and use it

// when we call foo.call(obj1);
// we bind the foo's 'this' to be obj1
// and store the arrow function into bar
// when we call bar.call(obj2);
// the arrow function uses the 'this' from the encosing lexical scope
// which is the foo's this, which was bound to the obj1
// and thats why obj1 is logged

// // From the BOOK;
// The arrow-function created in foo() lexically captures whatever
// foo()s this is at its call-time.

// The arrow-function created in foo() lexically captures whatever
// foo()s this is at its call-time. Since foo() was this-bound to obj1,
// bar (a reference to the returned arrow-function) will also be thisbound to obj1. The lexical binding of an arrow-function cannot be
// overridden (even with new!).
