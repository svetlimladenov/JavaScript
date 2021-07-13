const sort = function sort(inputArray, order) {
    const actions = {
        arr: inputArray,
        asc() {
            return this.arr.sort((a, b) => a - b);
        },
        desc() {
            return this.arr.sort((a, b) => b - a);
        },
        order() {
            this.arr = this[order]();
            return this;
        },
        print(method) {
            method.log(`[${this.arr.join(", ")}]`);
        },
    };

    return actions
        .order()
        .print(console);
};

sort([14, 7, 17, 6, 8], "asc");