myCoolModule(); // 1
var foo;

function myCoolModule() {
    // the function hoisting is first
    console.log(1);
}

myCoolModule = function () {
    console.log(2);
};

// Notice that var foo was the duplicate (and thus ignored) declaration,
// even though it came before the function foo()… declaration, because
// function declarations are hoisted before normal variables
