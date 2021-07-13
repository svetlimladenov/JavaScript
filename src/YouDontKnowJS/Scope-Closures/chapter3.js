function foo(a) {
    var b = 5;
    bar();
    function bar() {
        console.log(a);
    }

    var c = 1;
}

foo(2);
