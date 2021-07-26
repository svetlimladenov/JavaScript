function foo() {
    console.log(this.a);
}

const obj = {
    a: 5
};

function bar() {
    return foo.call(obj); // call-site
    // no matter how we call bindFoo(), (in the current case its called like a normal plain, undecorated call)
    // foo will always be executed with call(obj), thus binding obj to 'this' in the foo function
}

const baz = function baz() {
    return foo.call(obj); // since here we are not passing arguments we also can use call(..)
    // dont forget to return the result
};

bar(); // 5
setTimeout(bar, 100); // 5
bar.call({ a: 100 }); // 5
setTimeout(baz, 1000);

// The most typical way to wrap a function with a hard binding creates a
// pass-through of any arguments passed and any return value received:

// Another way to express this pattern is to create a reusable helper

function test(n) {
    return this.a + n;
}

function bind(fn, obj) {
    return function bined() {
        return fn.apply(obj, arguments); // if we will pass arguments, we should use apply
    };
}

const zzz = bind(test, obj);
const res = zzz(5);
console.log(res);

// eslint-disable-next-line no-extend-native
Function.prototype.bind2 = function bind2(thisArg) {
    const self = this;
    return function binded() {
        return self.apply(thisArg, arguments);
    };
};

const testBinded = test.bind2(obj);
console.log(testBinded(15), "bind 2 works");
