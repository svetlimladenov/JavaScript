const service = (() => {
    let collection = [];

    return {
        add(item) {
            collection.push(item);
        },
        remove(item) {
            collection = collection.filter((x) => {
                return x !== item;
            });
        },
        print() {
            console.log(collection.join(","));
        },
    };
})();

const input = ["add hello", "add again", "remove hello", "add again", "print"];

input.forEach((el) => {
    const action = el.split(" ");
    service[action[0]](action[1]);
});