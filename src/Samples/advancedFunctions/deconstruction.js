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

const bar = {
    name: "Goshe",
    method1() {
        const generateGreeting = function generateGreeting() {
            // 'use strict';
            console.log(this);
            return `Hello my name is ${this.name}`;
        };

        const greeting = generateGreeting(); // .call(this);
        console.log(greeting);
    },
    method2() {
        const generateGreeting = () => {
            // 'use strict';
            console.log(this);
            return `Hello my name is ${this.name}`;
        };

        const greeting = generateGreeting();
        console.log(greeting);
    },
};

bar.method1();
bar.method2();


const buz = function buz() {
    return {
        bam: {
            info() {
                console.log("hello");
            },
        },
    };
};

const { bam } = buz();
bam.info();

console.log(globalThis === this);