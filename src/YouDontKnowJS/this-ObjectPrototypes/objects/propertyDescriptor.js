function overview() {
    const obj = {
        a: "2"
    };

    const descriptor = Object.getOwnPropertyDescriptor(obj, "a");
    console.log(descriptor); // { value: '2', writable: true, enumerable: true, configurable: true }

    Object.defineProperty(obj, "b", {
        value: "defined with static object method",
        writable: true,
        configurable: true,
        enumerable: true
    });

    console.log(obj.b);

    console.log(Object.getOwnPropertyDescriptor(obj, "b"));
}
// overview();

function writable() {
    const foo = {
        a: 2
    };

    Object.defineProperty(foo, "a", {
        value: 3,
        writable: false,
        configurable: true,
        enumerable: true
    });

    console.log(foo.a); // 3

    foo.a = 123;
    console.log(foo.a); // still 3, was not changed because of the writable: false

    Object.defineProperty(foo, "a", {
        value: 3,
        writable: true,
        configurable: true,
        enumerable: true
    });

    foo.a = "not we can";

    console.log(foo.a);

    const descriptor = Object.getOwnPropertyDescriptor(foo, "a");
    descriptor.value = "Test";
    descriptor.writable = false; // this wont work, we change property descriptors via Object.defineProperty(..)
    foo.a = "changed with no problem again";
    console.log(foo);
}

// writable();

function writableWithStrict() {
    "use strict";
    const obj = {};

    Object.defineProperty(obj, "a", {
        value: 2,
        writable: false,
        configurable: true,
        enumerable: true
    });

    console.log(obj);

    obj.a = "error "; // TypeError: Cannot assign to read only property 'a' of object '#<Object>', because of 'use strict'
}

// writableWithStrict();

function configurable() {
    const foo = {
        b: "will delete"
    };

    Object.defineProperty(foo, "a", {
        value: 2,
        configurable: false,
        enumerable: true,
        writable: true
    });

    delete foo.a; // can't be deleted because configurable: false prevents the ability to remove existing property
    delete foo.b; // will be removed
    console.log(foo);

    Object.defineProperty(foo, "a", {
        value: 2,
        configurable: true,
        enumerable: true,
        writable: true
    }); // TypeError: Cannot redefine property: a
}

// configurable();

function configurableFalse() {
    // "use strict";
    const foo = {};

    Object.defineProperty(foo, "a", {
        value: 2,
        configurable: false,
        enumerable: true,
        writable: true
    });

    console.log(foo.a);

    Object.defineProperty(foo, "a", {
        value: 2,
        configurable: false,
        enumerable: true,
        writable: false
    });

    // even that configurable is false, you can still change writable to false

    foo.a = 15; // did not change, the writable: false, is acting

    Object.defineProperty(foo, "a", {
        value: 2,
        configurable: false,
        enumerable: true,
        writable: true // if we try to make it back now the cannot redefine TypeError occurs
    });
}

// configurableFalse();

function enumerable() {
    const foo = {
        a: 1,
        b: 2,
        c: 3
    };

    Object.defineProperty(foo, "b", {
        value: 2,
        writable: true,
        configurable: true,
        enumerable: false
    });

    for (const key in foo) {
        console.log(key); // a, c
    }

    // b is not console logged

    Object.keys(foo).forEach((key) => {
        console.log(foo[key]);
    });

    console.log(Object.keys(foo)); // [ 'a', 'c' ]
    console.log(Object.values(foo)); // [ 1, 3 ];
    console.log(foo.b); // still acessible
}

// enumerable();
