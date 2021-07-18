function foo(num) {
    console.log(num);
    this.counter = this.counter + 1;
}

foo.counter = 0; // After all all functions are objects, we can do this
// When the code executes foo.count = 0, indeed it’s adding a property
// count to the function object foo.

foo(1);
foo(2);
foo(3);
foo(4);

console.log(`called ${foo.counter}`); // foo.counter is still zero
// This proves that 'this' does not refer to the function object itself

console.log(counter);

// we accidently created a global variable and its values is NaN
// But how ?
// So when we call foo(..), 'this' is bind to the global,
// counter is undefined, so when we add 1, it becomes NaN

function bar() {
    bar.counter += 1;
}

bar.counter = 0;

bar();
bar();
bar();
bar();

console.log(bar.counter); // will work

function baz() {
    this.counter += 1;
}

baz.counter = 0;

baz.call(baz);
baz.call(baz);
baz.call(baz);
baz.call(baz);

console.log(baz.counter);
