function arrowVsScope() {
    function foo() {
        setTimeout(() => {
            // 'this' is lexically inherited from 'foo()'
            console.log(this.a);
        }, 100);
    }

    const obj = { a: "yey it works" };

    // since 'this' is lecially inherited from foo()
    // and we bound 'this' to obj, this in the arrow function will be obj

    foo.call(obj);

    // Pre-ES6, we
    // already have a fairly common pattern for doing so, which is basically
    // almost indistinguishable from the spirit of ES6 arrow-functions:
    function bar() {
        const self = this; // lexical capture of 'this'
        setTimeout(function () {
            console.log(self.a);
        }, 100);
    }

    bar.call(obj);
}

// arrowVsScope();

const person = {
    name: "ivan",
    films: ["got", "mot"],
    problem() {
        console.log(`Hi, my name is ${this.name}`);
        this.films.forEach(function (film) {
            console.log(`${this.name} watched ${film}`);
        });
    },
    lexicalScopeFix() {
        const self = this;
        this.films.forEach(function (film) {
            console.log(`${self.name} watched ${film}`);
        });
    },
    arrowFunction() {
        this.films.forEach((film) => {
            // 'this' here is lexically inherited from arrowFunction, which 'this' is bound using the implicit binding rule, so 'this' is the person object
            console.log(`${this.name} watched ${film}`);
        });
    },
    bind() {
        this.films.forEach(
            function (film) {
                // 'this' here is lexically inherited from arrowFunction, which 'this' is bound using the implicit binding rule, so 'this' is the person object
                console.log(`${this.name} watched ${film}`);
            }.bind(this)
        );
    }
};

person.problem();
// since forEach, is execution our function with as normal plain undecorated call (..)
// the default binding is in act, and this is bound to global,

person.lexicalScopeFix();

person.arrowFunction();

person.bind();
