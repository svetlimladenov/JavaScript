class C {
    constructor() {
        this.num = Math.random();
    }

    rand() {
        console.log(this.num);
    }
}

const c1 = new C();
c1.rand();

C.prototype.rand = function rand() {
    console.log(4);
};

c1.rand();
