function foo() {
    console.log(this);
    console.log(this.a);
}

global.a = 2;

foo();

(function () {
    console.log(this);
})();

console.log(global);
console.log(this);
