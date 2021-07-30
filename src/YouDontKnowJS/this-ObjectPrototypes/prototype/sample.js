function simpleShadowing() {
    const foo = {
        a: "foo"
    };

    // create a object linked to 'foo'
    const bar = Object.create(foo);
    bar.a = "bar"; // bar.a shadows the foo.a, because foo.a is not a setter, nor is writable:false

    console.log(bar.a);
}

// simpleShadowing();

function cannotShadowNonWritableProps() {
    // "use strict"; if in strict mode this will even throw TypeError
    const foo = {
        a: "foo"
    };

    Object.defineProperty(foo, "a", {
        writable: false
    });

    const bar = Object.create(foo);
    bar.a = "bar"; // the assignment is disallowed, because foo.a property is writable:false.
    console.log(bar.a); // foo
    console.log(bar); // {} // bar.a property is not added
}

// cannotShadowNonWritableProps();

function cannotShadowSetter() {
    const foo = {
        get a() {
            return this._a_ * 2;
        },
        set a(val) {
            this._a_ = val;
        }
    };

    foo.a = 4;
    console.log(foo.a);

    const bar = Object.create(foo);
    bar.a = 10;
    console.log(bar.a); // 20
    console.log(bar); // { _a_ : 10 } , but the propert 'a' is not added to bar object
}

// cannotShadowSetter();

function objectPrototypeHasNonEnumerableProps() {
    console.log(
        Object.getOwnPropertyDescriptor(Object.prototype, "hasOwnProperty")
    );

    console.log(Object.getOwnPropertyDescriptors(Object.prototype));
}

// objectPrototypeHasNonEnumerableProps();

function updateObjectPrototypeProps() {
    "use strict";
    const obj = {
        name: "Ivan",
        hasOwnProperty(name) {
            return false;
        }
    };

    const a = {
        age: 1
    };
    console.log(obj.hasOwnProperty("name")); // hasOwnProperty is shadowing the Object.prototype.hasOwnProperty(..)
    console.log(Object.prototype.hasOwnProperty.call(obj, "name")); // true
}

updateObjectPrototypeProps();
