const walking = (() => {
    const distance = 10;
    return ({
        getDistance() {
            return distance;
        },
    });
})();

const solve = (() => {
    let sum = 0;
    return function add(input) {
        sum += input;
        add.pesho = function pesho() {
            return sum;
        };
        return add;
    };
})();

console.log(solve(1)(2)(3).pesho());