/* eslint-disable no-restricted-syntax */
function mixin(sourceObject, targetObject) {
    for (const key in sourceObject) {
        if (!(key in targetObject)) {
            targetObject[key] = sourceObject[key];
        }
    }
    return targetObject;
}

const Vehicle = {
    engines: 1,
    ignition() {
        console.log("Turning on my engine!");
    },
    drive() {
        this.ignition();
        console.log("Steering and moving forward!");
    }
};

const Car = mixin(Vehicle, {
    wheels: 4,
    drive() {
        Vehicle.drive.call(this); // becahse of shadowing we have to make this explicit/manual linkage
        console.log(`Rolling on all ${this.wheels} wheels!`);
    }
});

Car.drive();

// Car now has a copy of the properties and functions form Vehicle
// Technically, functions are not actually duplicated, but rather references
// to the functions are copied.
