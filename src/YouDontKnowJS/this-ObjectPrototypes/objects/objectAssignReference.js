function firstSample() {
    const foo = {
        name: "Ivan",
        address: {
            town: "Kyustendil"
        }
    };

    const bar = Object.assign({}, foo);
    const baz = { ...foo };
    foo.address.town = "Sofia"; // we change the object 'address' on the source object

    // it reflects on the new object as well, because the new object address has the same reference as the old object address
    console.log(bar.address); // Sofia
    console.log(baz.address); // Sofia
}

function secondSample() {
    const foo = {
        name: "Ivan",
        address: {
            town: "Kyustendil"
        }
    };

    const obj2 = {
        name: "Goshe"
    };
    const bar = Object.assign(obj2, foo); // name: "Goshe" was overriden with the new property value
    console.log(bar);
}

// secondSample();

function multiplyAssigns() {
    const foo = {
        address: {
            town: "Kn",
            street: "St.george",
            number: 9
        }
    };

    const bar = {
        name: "Goshe",
        speak() {
            console.log(`Hello my name is ${this.name}`);
        }
    };

    const newObj = Object.assign({}, foo, bar);

    console.log(newObj.address);
    newObj.speak();

    const speadedObj = { ...newObj };

    console.log(speadedObj.address);
    foo.address.town = "Sofia";

    console.log(newObj.address);
    console.log(speadedObj.address);
}

// multiplyAssigns();

function spead() {
    const obj = {
        address: {
            town: "Kn",
            street: "St.george",
            number: 9
        }
    };

    const newObj = { name: "Ivan", ...obj };
    console.log(newObj);
}

// spead();

function speadArray() {
    function bar(a, b) {
        console.log(a, b);
    }

    bar(...[1, 2]);

    const obj = {
        a: 1,
        b: 2
    };
}

speadArray();

function myPolyfill() {
    function assign(target, source) {
        const to = Object(target);
        Object.keys(source).reduce((prev, cur) => {
            // eslint-disable-next-line no-param-reassign
            prev[cur] = source[cur];
            return prev;
        }, to);
        return to;
    }

    const source = {
        name: "Ivan",
        address: {
            town: "Kn"
        }
    };

    const newObj = assign({}, source);
    console.log(newObj);
}

myPolyfill();

function realPolifill() {
    if (typeof Object.assign !== "function") {
        // Must be writable: true, enumerable: false, configurable: true
        Object.defineProperty(Object, "assign", {
            value: function assign(target, varArgs) {
                // .length of function is 2
                "use strict";
                if (target === null || target === undefined) {
                    throw new TypeError(
                        "Cannot convert undefined or null to object"
                    );
                }

                var to = Object(target);

                for (var index = 1; index < arguments.length; index++) {
                    var nextSource = arguments[index];

                    if (nextSource !== null && nextSource !== undefined) {
                        for (var nextKey in nextSource) {
                            // Avoid bugs when hasOwnProperty is shadowed
                            if (
                                Object.prototype.hasOwnProperty.call(
                                    nextSource,
                                    nextKey
                                )
                            ) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
                return to;
            },
            writable: true,
            configurable: true
        });
    }
}
