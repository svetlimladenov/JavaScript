const obj = {
    name: "Ivan",
    lastName: "Petrov"
};

function makeFullName(title, seca) {
    const fullName = `${title} ${this.name} ${this.lastName}`;
    console.log(fullName, seca);
    return fullName;
}

// eslint-disable-next-line no-extend-native
Function.prototype.bind2 = function bind2(thisArgs, args) {
    const self = this;
    return function binded() {
        let realArgs = arguments;
        if (args && args.length > 0) {
            // Similar in the real implementation, the args passed to the bind method have bigger priority
            realArgs = args.concat(Array.from(arguments));
        }
        return self.apply(thisArgs, realArgs);
    };
};

const bindedToIvan = makeFullName.bind2(obj, ["Gospoid"]);
bindedToIvan("mr");

const realBindToIvan = makeFullName.bind(obj, "Gospodin");
realBindToIvan("mr");

function foo(name) {
    console.log(name);
    console.log(this);
    console.log(arguments);
}

const fooBineded = foo.bind2({ a: 2 }, ["ivan", "pesho"]);
fooBineded("goshe", "vargal");
