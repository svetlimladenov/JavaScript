function compose(arr, fn, inital) {
    let res = inital;
    for (let i = 0; i < arr.length; i += 1) {
        res = fn(res, arr[i], i);
    }
    return res;
}

const sum = compose(
    [1, 2, 100],
    (acc, cur, idx) => {
        return acc * cur;
    },
    1 // initial value
);

const map = compose(
    [1, 2, 3, 4],
    (acc, cur, idx) => {
        acc.push(cur * 2); // but now its an impure function
        return acc;
    },
    []
);

console.log(map); // 2, 4, 6, 8

// you can NOT do this with a filter(..), becase the filter makes decitions bases only on the current iterated value, not on the whole list as here
const unique = [1, 2, 2, 2, 4, 5, 5, 6, 6, 7, 7].reduce((acc, cur, idx) => {
    if (acc.indexOf(cur) < 0) {
        acc.push(cur);
    }
    return acc;
}, []);

console.log(unique);

const arr = Array(64).fill(null);

const reduced = arr.reduce(
    (acc, curr, idx) => {
        if ((idx + 1) % 8 === 0 && idx !== 0) {
            acc.currentRow.push(idx);
            acc.board.push(acc.currentRow.slice());
            acc.currentRow = [];
            return acc;
        }
        acc.currentRow.push(idx);
        return acc;
    },
    { currentRow: [], board: [] }
);

console.log(reduced);
