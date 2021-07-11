const foo = {
    extend(template) {
        Object.keys(template).forEach((key) => {
            if (typeof template[key] === "function") {
                const proto = Object.getPrototypeOf(this);
                proto[key] = template[key];
            } else {
                this[key] = template[key];
            }
        });
    },
};

const bar = {
    someProperty: "someString",
    someMethod() {
        console.log("some method");
    },
};

foo.extend(bar);
console.log(foo);
