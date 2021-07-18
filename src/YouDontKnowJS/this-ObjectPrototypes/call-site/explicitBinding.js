function foo() {
    console.log(this.a);
}

const obj = {
    a: 5
};

// if we want to bind this to the object, previously we had to stick a function property to the object
// so that 'this' can refer to the object itself
// Like this
// obj.foo = foo;

// But we can achive that without adding a function proerty to the object
// every function has some utils, coming from the function object [[Prototype]]
// and this methods a call(..) and apply(..)

// with they we explicitly bind object to the 'this' in a function

foo.call(obj);
foo.apply(obj);

// but this is still not fixing the problem with the "lost" binding
// aka

function callFoo(cb) {
    cb();
}

// callFoo(foo.apply(obj)); // This wont work: TypeError: cb is not a function
