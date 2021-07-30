function sample() {
    const a = {
        something() {
            console.log("Say something nice about me!");
        }
    };

    const b = Object.create(a);
    b.something();

    // with Object.create(..) we don't need any of the unnecessary
    // complication of new functions acting as classes and
    // constructor calls, confusion of .prototype and .constructor properties
    // or any of that extra stuff
}

// sample();

function polyfill() {
    Object.create = null;

    if (!Object.create) {
        Object.create = function create(o) {
            function F() {}
            F.prototype = o;
            return new F(); // this creates a new object, and set its [[Prototype]] to the F.prototype object, which is our 'o'
            // thats how we return a new object, [[Prototype]] linked to 'o'
        };
    }

    const a = {
        something() {
            console.log("Say smth nice !");
        }
    };

    const b = Object.create(a);

    b.something();
}

// polyfill();

function nonPolyfillableObjectCreate() {
    const obj = {
        a: 2
    };

    const myObj = Object.create(obj, {
        b: {
            enumerable: false,
            value: 3
        },
        c: {
            value: 4
        }
    });

    console.log(myObj.a);
    console.log(myObj.b);
    console.log(Object.prototype.hasOwnProperty.call(myObj, "a")); // false
    console.log(Object.prototype.hasOwnProperty.call(myObj, "b")); // true
}

nonPolyfillableObjectCreate();
