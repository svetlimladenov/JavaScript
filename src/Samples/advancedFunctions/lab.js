const sum = [1, 2, 3].reduce((acc, cur) => {
    return acc + cur;
}, 0);

console.log(sum);

const myReducer = function myReducer(array, callback, startValue) {
    let result = startValue;
    for (let i = 0; i < array.length; i += 1) {
        result = callback(result, array[i]);
    }

    return result;
};

const mySum = myReducer([1, 2, 3], (acc, cur) => {
    return acc + cur;
}, 0);

console.log(mySum);

const myReducerExtension = function myReducerExtension(callback, startValue) {
    let result = startValue;
    for (let i = 0; i < this.length; i += 1) {
        result = callback(result, this[i]);
    }
    return result;
};

Array.prototype.myReducerExtension = myReducerExtension;

const wow = [1, 2, 3].myReducerExtension((acc, cur) => {
    return acc + cur;
}, 0);

const wow2 = [1, 2, 3].reduce((acc, cur) => {
    return acc + cur;
}, 0);

console.log(wow === wow2);