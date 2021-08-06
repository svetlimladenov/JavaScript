/* eslint-disable max-classes-per-file */
class Abstract {
    constructor() {
        if (new.target === Abstract) {
            throw new TypeError("Cannot construct ...");
        }
    }
}

class NonAbstract extends Abstract {
    constructor(id) {
        console.log(new.target); // [class NonAbstract extends Abstract]

        super();
        this.id = id;
    }

    log() {
        console.log(this.id);
    }
}

const non = new NonAbstract(2);
non.log();

const err = new Abstract();
