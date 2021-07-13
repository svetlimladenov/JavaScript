const info = require('./info.json');

console.log(info);

const vehicle = {
    beep: () => {
        console.log('Beep');
    },
};

const car2 = Object.create(vehicle);
car2.model = 'Honda';

const car = {
    model: 'Honda',
    horsePower: 150,
    beep: () => {
        console.log('beeeping inside');
    },
};

Object.freeze(car);

car.model = 'Honda 2';
console.log(car);

let str = JSON.stringify(car);
let car3 = JSON.parse(str);
console.log(str);
console.log(car3);