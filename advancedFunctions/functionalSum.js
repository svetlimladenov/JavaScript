function makeAdd(initial) {
    let result = initial;

    function add(number) {
        result += number;
        return add;
    }

    add.toString = function getResult() {
        return result;
    };

    add.log = function log() {
        console.log(result);
    };

    return add;
}

let a = makeAdd(5)(5)(5)(-10);
a.log();