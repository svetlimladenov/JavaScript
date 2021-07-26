/* eslint-disable object-shorthand */
/* eslint-disable func-names */
function typicalFor() {
    const arr = [1, 2, 3];
    for (let i = 0; i < arr.length; i += 1) {
        const element = arr[i];
        console.log(element);
    }
}

// typicalFor();

function forEach() {
    const arr = [1, 2, 3];
    arr.forEach(function exp(el) {
        console.log(el);
    });
}

// forEach();

function every() {
    const arr = [1, 2, 3, 4, 5, 6];
    arr.every((e) => {
        if (e === 4) {
            return false; // once false returned the iterations stops
        }

        console.log(e);
        return true;
    });

    arr.some((el) => {
        console.log(el);
        return el === 5; // once el = 5, this will return true, resulting the some function to stop, similar to a break
    });
}

// every();

function forOf() {
    const arr = [1, 2, 3, 4, 5, 6];

    for (const iterator of arr) {
        // iterates directly on the values
        // we dont need arr[i] to access the actual value
        console.log(iterator);
    }
}

// forOf();

function manualForOfIterator() {
    const arr = [1, 2, 3];

    const it = arr[Symbol.iterator]();
    console.log(it.next()); // { value: 1, done: false }
    console.log(it.next()); // { value: 2, done: false }
    console.log(it.next()); // { value: 3, done: false }
    console.log(it.next()); // { value: undefined, done: false }
}

// Symbol.iterator - A method that returns the default iterator for an object. Called by the semantics of the for-of statement.
// manualForOfIterator();

function forOfObjectError() {
    const obj = {
        a: 1,
        b: 2
    };

    for (const iterator of obj) {
        // TypeError: obj is not iterable
        console.log(iterator);
    }
}

// forOfObjectError();

function ownObjectIterator() {
    const obj = {
        a: 1,
        b: 2
    };

    Object.defineProperty(obj, Symbol.iterator, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: function () {
            const currentObj = this;
            let idx = 0;
            const keys = Object.keys(currentObj); // the keys of our object
            return {
                next: function () {
                    return {
                        value: currentObj[keys[idx++]], // with the closure we store the current index
                        done: idx > keys.length
                    };
                }
            };
        }
    });

    const it = obj[Symbol.iterator]();
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

    // eslint-disable-next-line no-restricted-syntax
    for (const iterator of obj) {
        // now it can be iterated, when we debug we can see how we enter the next() function
        console.log(iterator);
    }
}

// ownObjectIterator();

function infiniteIterator() {
    const randoms = {
        [Symbol.iterator]: function () {
            return {
                next: function () {
                    return {
                        value: Math.random()
                    };
                }
            };
        }
    };

    var index = 1;
    for (var iterator of randoms) {
        index += 1;
        console.log(iterator);
        if (index === 100) {
            break;
        }
    }
}

// infiniteIterator();

function idGenerator() {
    const idGenerator = {
        [Symbol.iterator]: function () {
            let index = 0;
            return {
                next() {
                    index += 1;
                    return { value: index };
                }
            };
        }
    };

    const generator = idGenerator[Symbol.iterator]();

    const ids = [generator.next(), generator.next()];
    console.log(ids);

    for (const iterator of idGenerator) {
        console.log(iterator); // infinite generation of ids
    }
}

idGenerator();
