function objectConst() {
    "use strict";
    const obj = {};

    Object.defineProperty(obj, "SERVER_ADDRESS", {
        value: "https://google.com/",
        writable: false,
        configurable: false
    });

    console.log(obj["SERVER_ADDRESS"]);
    obj["SERVER_ADDRESS"] = "https://bing.com/";
}

// objectConst();

function preventObjExtension() {
    "use strict";
    const foo = {
        a: 2
    };

    Object.preventExtensions(foo);

    foo.b = "21"; // was not added as a property
    // with use strict  - TypeError: Cannot add property b, object is not extensible
    console.log(foo); // { a: 2 }
}

// preventObjExtension();

function comparison() {
    const foo = {
        a: "foo"
    };

    const bar = {
        a: "bar"
    };

    const baz = {
        a: "baz",
        arr: [1, 2]
    };

    Object.preventExtensions(foo);
    Object.seal(bar);
    Object.freeze(baz);

    console.log(Object.getOwnPropertyDescriptor(foo, "a"));
    console.log(Object.getOwnPropertyDescriptor(bar, "a"));
    console.log(Object.getOwnPropertyDescriptor(baz, "a"));

    baz.arr.push(3);
    console.log(baz.arr); // [1, 2, 3] the array object is unaffected as expected
}

// comparison();

function deepFreezeSample() {
    const foo = {
        a: 2,
        arr: [1, 2],
        obj: {
            a: "inner a"
        }
    };

    Object.freeze(foo);

    foo.obj.b = "changableee"; // we add it withour problem

    console.log(foo.obj);

    const bar = {
        a: 2,
        arr: [1, 2],
        obj: {
            a: "inner a"
        }
    };
    function deepFreeze(obj) {
        Object.freeze(obj);
        Object.values(obj).forEach((val) => {
            if (typeof val === "object") {
                deepFreeze(val);
            }
        });
    }

    deepFreeze(bar);

    bar.obj.b = "bar.obj is now also frozen"; // TypeError
    bar.arr.push(1); // TypeError
    console.log(bar.arr);
}

deepFreezeSample();
