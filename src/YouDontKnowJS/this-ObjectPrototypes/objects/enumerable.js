function sample() {
    const obj = {};

    Object.defineProperty(obj, "a", {
        value: 2,
        enumerable: true
    });

    Object.defineProperty(obj, "b", {
        value: 3,
        enumerable: false
    });

    for (const key in obj) {
        console.log(obj[key]);
    }

    console.log("b" in obj); // true

    console.log(obj.propertyIsEnumerable("b"));
    console.log(obj.propertyIsEnumerable("a"));
    console.log(Object.prototype.propertyIsEnumerable.call(obj, "b")); // false
    console.log(Object.prototype.propertyIsEnumerable.call(obj, "a")); // true
}

// sample();

function keysVsOwnPropertyNames() {
    const obj = {
        a: 2,
        b: 3
    };

    Object.defineProperty(obj, "c", {
        value: 3,
        enumerable: false
    });

    console.log(Object.keys(obj)); // Does not include non enumerable properties
    console.log(Object.getOwnPropertyNames(obj)); // Includes non enumerable properties
}

// keysVsOwnPropertyNames();

function comparison() {
    const baseObj = {
        a: 2
    };

    const obj = Object.create(baseObj);
    obj.b = "enumerable";
    Object.defineProperty(obj, "c", {
        value: "non enumerable",
        enumerable: false
    });

    console.log("a" in obj); // true, in operator checks the [[Prototype]] chain
    console.log(Object.prototype.hasOwnProperty.call(obj, "a")); // false does not check the [[Prototype ]] chain
    console.log(Object.keys(obj)); // [ 'b' ] - does not check the [[Prototype]] chain, and dont include non-enumerables
    console.log(Object.getOwnPropertyNames(obj)); // [ 'b', 'c' ] - does not check the chain, but include non-enumerables

    for (const key in obj) {
        console.log(obj[key]);
    }

    // it first logs the 'b' property from the object itself
    // then second it logs the 'a' property from the [[Prototype]] chain
}

comparison();
