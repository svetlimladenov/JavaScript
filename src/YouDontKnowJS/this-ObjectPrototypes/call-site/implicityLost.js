function foo() {
    console.log(this.a);
}

function bar(fn) {
    // `fn` is just another reference to `foo`
    fn(); // <-- call-site! -  normal plain, undecorated call
}

const obj = {
    a: 2,
    foo,
    bar() {
        console.log(this.a);
    }
};

global.a = "oops, global"; // `a` also property on global object

bar(obj.foo); // "oops, global"

// obj.foo is just a reference to the foo() function

bar(obj.bar);

// it doesnt mattet that bar() and foo() are "owned" by the obj object
// they are just passed as a reference to the doFoo() function
// where the actual call site apears which is just a normal plain, undecorated call
// and thus the default binding appears

const anotherReference = obj.bar;
anotherReference(); // oops, global again, <-- call-site

// again obj.bar is just a reference to the function
// we care about the call-site and the how the function is invoked
// its invoked like just a normalm plain, undecorated call
// and thus the default binding appears

setTimeout(obj.bar, 100); // behind the scenes, in Node.js
// when you track down the call-site by using the call-stack
// you find the following code

// try {
//     const args = timer._timerArgs;
//     if (args === undefined)
//       timer._onTimeout(); --  THIS IS OUR call-side,
//          and as we can see its a method call, so the implicit binding rule is used, and this is bind to the timer object
//     else
//       ReflectApply(timer._onTimeout, timer, args);
