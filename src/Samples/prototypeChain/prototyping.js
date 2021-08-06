/* eslint-disable max-classes-per-file */

function classesSample() {
    class Human {
        constructor(name) {
            this.name = name;
        }

        walk() {
            console.log(`${this.name} is walking`);
        }
    }

    class Employee extends Human {
        constructor(name, jobTitle) {
            super(name);
            this.jobTitle = jobTitle;
        }

        work() {
            console.log(`${this.name} is working`);
        }
    }

    const gosho = new Employee("Gosho", "Dev");
    gosho.walk();
    gosho.work();

    console.log(Object.getPrototypeOf(Employee) === Human); // true
    console.log(Object.getPrototypeOf(Human) === Function.prototype); // true
}

// classesSample();

function functionsSample() {
    function Human(name) {
        this.name = name;
    }

    Human.prototype.walk = function walk() {
        console.log(`${this.name} is walking`);
    };

    function Employee(name, jobTitle) {
        Human.call(this, name);
        this.jobTitle = jobTitle;
    }

    Employee.prototype = Object.create(Human.prototype);
    Object.setPrototypeOf(Employee, Human);

    Employee.prototype.work = function work() {
        console.log(`${this.name} is working`);
    };

    const ivan = new Employee("Ivan", "NZ");
    ivan.work();
    ivan.walk();

    console.log(Object.getPrototypeOf(Employee) === Human); // true
    console.log(Object.getPrototypeOf(Human) === Function.prototype); // true
}

functionsSample();

function justObjects() {
    const Human = {
        init(name) {
            this.name = name;
        },
        walk() {
            console.log(`${this.name} is walking`);
        }
    };

    const Employee = {
        setup(name, jobTitle) {
            this.init(name);
            this.jobTitle = jobTitle;
        },
        work() {
            console.log(`${this.name} is working`);
        }
    };

    Object.setPrototypeOf(Employee, Human);

    const gosho = Object.create(Employee);
    gosho.setup("Gosho", "Dev");

    gosho.walk();
    gosho.work();

    console.log(Object.getPrototypeOf(gosho) === Employee);
    console.log(Object.getPrototypeOf(Employee) === Human);
}

// justObjects();
