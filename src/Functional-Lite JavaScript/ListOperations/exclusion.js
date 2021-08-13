// filter
// side not this implementations here are not for polyfills, they just ilustrate the methods on a higher level
function filter(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

const arr = [1, 2, 3, null, undefined];

const filtered = filter(arr, (x) => x === 1);
console.log(filtered);

const team = [
    {
        name: "Ivan",
        age: 22
    },
    {
        name: "Gosho",
        age: 22
    },
    {
        name: "Kalina",
        age: 17
    }
];

const ageAbove18 = filter(team, (x) => {
    return x.age > 18;
});

console.log(ageAbove18);

// heres how you can even write the filter function with a recursion, instead of iteration
// you can do it but its not necessary better, even it may be worse, more memory alocation
function exclude(arr, fn) {
    if (arr.length === 1) {
        if (fn(arr[0])) {
            return [arr[0]];
        }
    }
    if (fn(arr[0])) {
        return [arr[0], ...exclude(arr.slice(1), fn)];
    }

    return [...exclude(arr.slice(1), fn)];
}

const nums = [1, 2, 3, 4];

console.log(exclude(nums, (x) => x % 2 === 0)); // [2, 4]
console.log(filter(team, (x) => x.age > 18));
