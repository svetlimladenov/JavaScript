class Animal {
    speak() {
        console.log(this);
    }

    static eat() {
        console.log("aa");
        console.log(this);
    }
}

const cat = new Animal();
cat.speak();

const { speak } = cat;
speak(); // undefined, because code within the class body's semantic is always executed in strict mode

Animal.eat();

class Rectangle {
    #height = 0;
    #width;
    public = 10;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
    info() {
        console.log(this.#height);
    }
}
const rec = new Rectangle(10, 10);
console.log(rec.public);
console.log(rec.#width);
rec.info();
