function foo(a) {
    this.a = a;
}

const bar = new foo(2); // constructor call of a function
console.log(bar.a);

// 1. A brand new object is created (constructed) from thin air

// 2. The newly constructed object is [[Prototype]]-linked

// 3. The newly created objects is set as the 'this' binding for that function call

// 4. The new invoked function call will automatically return the newly constructed object
