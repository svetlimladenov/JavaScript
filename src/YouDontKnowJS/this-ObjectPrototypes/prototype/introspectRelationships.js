function instanceOfExample() {
    function Foo() {
        this.name = "FOOOOOO";
    }

    Foo.prototype.hello = "hello there";

    const a = new Foo();

    console.log(a instanceof Foo); // true
    console.log(a instanceof Object); // true
}

function instanceOfError() {
    // instanceof only works for function

    const b = { a: 2 };
    const c = Object.create(b);
    console.log(c instanceof b); // TypeError: Right-hand side of 'instanceof' is not callable
}

function customUtility() {
    const a = { a: 2 };
    const b = Object.create(a);
    console.log(b.a); // it works

    function isRelatedTo(o1, o2) {
        function F() {}
        F.prototype = o2;
        return o1 instanceof F; // instance of will check if o1 has in the whole [[Prototype]] chain the object, F.prototype, which we assigned to o2
    }

    console.log(isRelatedTo(b, a)); // true
}

// customUtility();

function isPrototypeOf() {
    function Foo() {}
    Foo.prototype.connect = function connect() {
        console.log("connected");
    };

    const a = new Foo();
    console.log(Foo.prototype.isPrototypeOf(a)); // true
    console.log(Object.prototype.isPrototypeOf.call(Foo.prototype, a)); // true

    const b = { b: 2 };
    const c = Object.create(b);
    console.log(Object.prototype.isPrototypeOf.call(b, c)); // true, it works even for just objects, it does not need a .prototype as instanceof requires
}

isPrototypeOf();
