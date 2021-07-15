// There are other code patterns that leverage the power of closure but
// that do not on the surface appear to be about callbacks. Let’s examine
// the most powerful of them: the module

function myCoolModule() {
    var smth = "cool";
    var another = [1, 2, 3];

    function doSmth() {
        console.log(smth);
    }

    function doAnother() {
        another.forEach((x) => {
            console.log(x);
        });
    }

    // It’s appropriate to think of
    // this object return value as essentially a public API for our module.
    return {
        doSmth,
        doAnother,
    };
}

const bar = myCoolModule();

bar.doSmth(); // doSmth has a closure on the foo lexical scope, this way we can encapsulate the smth and another variables inside this module
