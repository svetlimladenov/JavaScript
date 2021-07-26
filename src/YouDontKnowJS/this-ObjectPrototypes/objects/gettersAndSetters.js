function sample() {
    const foo = {
        a: 2
    };

    console.log(foo.a); // [[Get]] operation is performed

    foo.b = 14; // [[Put]] operation is performed

    console.log(foo.c); // undefined

    console.log(c); // Reference Error
}

// sample();

function gettersAndSetters() {
    const foo = {
        a: 2,
        get b() {
            return this._a_;
        },
        set b(val) {
            this._a_ = val * 2;
        }
    };

    foo.b = 15;
    console.log(foo.b);
    console.log(foo._a_);
}

// gettersAndSetters();

function ownProperty() {
    const foo = {
        a: 2
    };

    console.log("a" in foo); // true
    console.log(foo.hasOwnProperty("a")); // true

    const notLinkedObj = Object.create(null); // this object has no linkage to the Object prototype
    notLinkedObj.a = "5";
    console.log(notLinkedObj.a); // 5
    // console.log(notLinkedObj.hasOwnProperty("a")); // TypeError hasOwnPropery is not a function, it was undefined
    console.log(Object.prototype.hasOwnProperty.call(notLinkedObj, "a")); // true
    // eslint rule - no-prototype-buildins
}

ownProperty();
