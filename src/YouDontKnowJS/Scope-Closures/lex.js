function foo(c) {
    function bar() {
        // var c = 15;
        console.log(c);
    }

    bar();
    console.log(c);
};

foo(5);
