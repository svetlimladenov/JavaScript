function Vehicle() {
    this.engines = 1;
}

Vehicle.prototype.ignition = function ignition() {
    console.log("Turning on my engine!");
};

Vehicle.prototype.drive = function drive() {
    this.ignition();
    console.log("Steering and moving forward!");
};

function Car() {
    // car is a Vehicle
    let car = new Vehicle();
    // we reveive a brand new object, with one property - engines: 1
    // this object prototype has, the ignition(..) and the drive(..) functions
    // { engines: 1} - prototype { ignition(..), drive(..) }

    car.wheels = 4;
    // { engines: 1, wheels: 4 }

    const vehDrive = car.drive;
    // we store the Vehicle.prototype.drive function in this variable

    // we add a new function to the car object
    car.drive = function drive() {
        // vehDrive(); if we call it like this, this is bound to the global object, aka default binding
        vehDrive.call(this); // we call the Vehicle.prototype.drive(..) function, with the constant in which we stored it
        // this is the car object, implicit binding
        console.log(`Rolling on all ${this.wheels} wheels!`);
    };

    // { engines: 1, wheels: 4, drive(..) } - prototype - { ignition(..), drive(..) }
    return car;
}

const honda = new Car();
honda.drive();

const bmw = Car(); // we dont actually need to call it with new, since the object created is not used anywhere, and we explictily return car;
bmw.drive();
