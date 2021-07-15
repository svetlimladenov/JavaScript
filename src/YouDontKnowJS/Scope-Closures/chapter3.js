function myCoolModule(a) {
    if (true) {
        function bar() {
            // functions a are not bound to the block scope
            console.log("bar");
        }
    }

    bar();
}

myCoolModule(2);
