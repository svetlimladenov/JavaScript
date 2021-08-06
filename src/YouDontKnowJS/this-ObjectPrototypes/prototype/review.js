/* eslint-disable prefer-rest-params */
/* eslint-disable no-extend-native */
function Foo() {}

const a = new Foo();

// Foo is not a constructor, foo is just a regular function
// when new is used to call a function, its called a constuctor call

// 4 thing happen when we call a function with the new keyword

// 1. A brand new object is created from thin air
// 2. The new object is [[Prototype]]-linked to the Foo.prototype object
// 3. The new object is bound to 'this' for that function call
// 4. The new object is returned by default

// console.log(a instanceof Foo); // instance of check the entire prototype chain for the object Foo.prototype

function objectCreatePolyfill() {
    Object.create = null;
    if (!Object.create) {
        Object.create = function create(obj) {
            function F() {}
            F.prototype = obj;
            return new F();
        };
    }

    const a = { a: 2 };
    const b = Object.create(a);
    console.log(b.a);
}

// objectCreatePolyfill();

function bindPolyfill() {
    Function.prototype.bind = null;
    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(thisArg) {
            const aArgs = Array.prototype.slice.call(arguments, 1); // 1 because we want to skip the thisArg

            const self = this;
            return function bound() {
                const bArgs = Array.prototype.slice.call(arguments);

                self.apply(thisArg, aArgs.concat(bArgs));
            };
        };
    }

    function foo(a, b) {
        console.log(this);
        console.log(a, b);
    }

    const bar = foo.bind({ a: 2 }, 3);
    bar(4);
}

// bindPolyfill();

function iterator() {
    const arr = [1, 2, 3];
}

// iterator();

function prototypes() {
    function Foo() {}

    Foo.prototype.greeting = function greeting() {
        console.log("Hello");
    };

    console.log(Foo.prototype);
    const FooPrototypeProto = Object.getPrototypeOf(Foo.prototype);
    console.log(FooPrototypeProto === Object.prototype); // true
    const FooProto = Object.getPrototypeOf(Foo);
    console.log(FooProto === Function.prototype); // true
}

prototypes();
