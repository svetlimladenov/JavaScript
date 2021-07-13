function arrowInsideOtherFunction() {
    const bar = {
        baz: function baz() {
            const x = (() => this);
            return x;
        },
    };

    const fn = bar.baz();

    const fnRes = fn();

    console.log(fnRes === bar);
}

function arrowWithGlobalScopeDemo() {

    let someGlobalObject = this;
    let foo = (() => this);
    console.log(foo() === someGlobalObject); // true

    const obj = {
        func: foo,
    };

    console.log(foo() === someGlobalObject); // true

    console.log(foo.call(obj) === someGlobalObject);
}

function asyncForeachDemo() {
    const forEachAsync = function forEachAsync(callback) {
        this.forEach((n) => {
            setTimeout(() => {
                callback(n);
            }, 0);
        });
    };

    Array.prototype.forEachAsync = forEachAsync;

    [1, 2, 3, 4].forEachAsync((n) => {
    });
}

// asyncForeachDemo();

// arrowWithGlobalScopeDemo(); 

// arrowInsideOtherFunction();

function forEachTest() {
    const person = {
        name: "Ivan",
        films: ["GOT", "MOT"],
        info: function info() {
            function printInfo(film) {
                console.log(`${this.name} watched ${film}`);
            }
            this.films.forEach(printInfo.apply(this));
        },
    };

    person.info.call(person);
}

forEachTest();


