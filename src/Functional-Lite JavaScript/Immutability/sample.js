function mutable() {
    function doubleThemMutable(list) {
        for (let i = 0; i < list.length; i++) {
            list[i] = list[i] * 2;
        }
    }

    const arr = [3, 4, 5];
    doubleThemMutable(arr);

    console.log(arr); // [6, 8, 10]
}

function doubleThemImmutable(list) {
    const newList = [];
    for (let i = 0; i < list.length; i += 1) {
        newList[i] = list[i] * 2;
    }

    return newList;
}

const arr = [3, 4, 5];
const arr2 = doubleThemImmutable(arr);
console.log(arr); // [3, 4, 5]
console.log(arr2); // [6, 8, 10]
