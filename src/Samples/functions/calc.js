const calculatorCreator = function calculatorCreator(input = 0) {
    let result = input;

    function sum(a) {
        result += a;
    }

    function substract(a) {
        result -= a;
    }

    function multiply(a) {
        result *= a
    }

    function devide(a) {
        result /= a;
    }

    function printResult(){
        console.log(`The result is ${result}`);
    }

    return [sum,substract,multiply, devide, printResult];
}

const calculator = calculatorCreator();

const printResult = calculator[4];
const sum = calculator[0];
const devide = calculator[3];
const muitiply = calculator[2];

printResult();
sum(5);
sum(12);
sum(1000);
sum(3);
printResult();
devide(6);
printResult();
muitiply(6);
printResult();



function bar (a, b, action){
    let result = action(a, b);
    console.log(result);
}

let x = 1;
let y = 10;

let foo = (a, b) => {
    return a + b;
}

bar(x, y, foo);
