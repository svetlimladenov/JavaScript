const foo = {
    counter: 0,
    increase(n) {
        this.counter += n;
    },
    decrease(n) {
        this.counter -= n;
    },
    value() {
        return this.counter;
    },
};

foo.counter = undefined;
foo.increase(5);
console.log(foo.value());

const moduleBar = (() => {
    let counter = 0;
    return {
        increase(n) {
            counter += n;
        },
        decrease(n) {
            counter -= n;
        },
        value() {
            return counter;
        },
    };
})();

moduleBar.counter = undefined; // this won't throw, but won't work , it will not change the value of the actual counter
moduleBar.increase(5);
console.log(moduleBar.value());


const obj = (() => {
    const counter = 1;
    return {
        arrow: () => {
            console.log(this);
        },
        form() {
            console.log(counter);
        },
    };
})();

obj.arrow();
obj.form();