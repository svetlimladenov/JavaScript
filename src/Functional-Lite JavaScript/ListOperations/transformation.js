/* eslint-disable no-extend-native */
// also called mapping in functional programming
function transoft(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }

    return res;
}

function doubleIt(v) {
    return v * 2;
}

const devide = (x) => x / 3;

const arr = [3, 6, 9];

const doubleArr = transoft(arr, doubleIt);
console.log(doubleArr);
const deviedArr = transoft(arr, devide);
console.log(deviedArr);

// side not this implementations here are not for polyfills, they just ilustrate the methods on a higher level, there are more corner cases not catched here
Array.prototype.map = function map(fn) {
    const res = [];
    for (let i = 0; i < this.length; i += 1) {
        res.push(fn(this[i]));
    }
    return res;
};

const tripleArr = arr.map((x) => x * 3);
console.log(tripleArr);
