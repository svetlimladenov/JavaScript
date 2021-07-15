function test() {
    try {
        undefined();
    } catch (err) {
        console.log(err);
    }

    console.log(err); // err is block-scoped inside the catch statement
}

test();
