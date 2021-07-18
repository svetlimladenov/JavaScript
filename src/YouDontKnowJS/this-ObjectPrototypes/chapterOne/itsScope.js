function foo() {
    var a = 2;
    console.log(this);
    this.bar();
}

function bar() {
    console.log(this.a);
}

foo();
