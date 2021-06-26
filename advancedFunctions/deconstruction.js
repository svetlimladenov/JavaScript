const obj = {
    name: "Ivan",
    greet() {
        return `Hello ${this.name}`;
    },
    address: {
        street: "St georgi",
        number: 9,
        floor: 2,
        apartament: 3,
        info() {
            return `Lives on street ${this.street} N${this.number}`;
        },
    },
    info() {
        return `${this.name} ${this.address.info()}`;
    },
};

const { address } = obj;

console.log(address.info());
