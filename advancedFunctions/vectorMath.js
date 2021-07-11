/* eslint-disable wrap-iife */

(() => {
    console.log(this, "arrow iife");
})();

(function test() {
    console.log(this, "function iife");
})();

setTimeout(function t() {
    console.log(this, "setTimeout func");
}, 0);

const window = {};

function mySetTimeout(callback) {
    callback(); //
    callback.call(this);
}

mySetTimeout(function cb() {
    console.log(this);
});

window.mySetTimeout = mySetTimeout;

window.mySetTimeout(function cb() {
    console.log(this, "normal func callback");
});

window.mySetTimeout(() => {
    console.log(this, "arrow callback");
});

const test = {
    arr: [1, 2, 3],
    name: "test",
    demo() {
        this.arr.forEach((n) => {
            console.log(n, this.name);
        });
    },
};

test.demo();

const myDocument = {
    name: "my doc",
    addEventListener(event, cb) {
        cb.call(this, event);
    },
};

myDocument.addEventListener("click", (e) => {
    console.log(this === globalThis);
    console.log(e);
});

const arrow = () => console.log(this);
arrow();