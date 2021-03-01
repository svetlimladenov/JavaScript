const { slice, meanBy, method } = require("lodash");

function arraysAreObjects() {
    let gosho = [];

    gosho[0] = 10;
    gosho[1] = 100;
    gosho['ivan'] = 'ivan petrov';
    gosho[-15] = 151;
    console.log(gosho);
    // console.log(gosho['ivan']);
    
    
    for (const key in gosho) {
        if (Object.hasOwnProperty.call(gosho, key)) {
            console.log(gosho[key]);
        }
    }
    
    
    let obj = {};
    obj['ivan'] = 'ivan petrov';
    console.log(obj);
}

arraysAreObjects();

function methods(){
    let foo = [1, 2, 3, 4, 5, 6];
    let sliced = foo.splice(1,3 );

    console.log(sliced);
    console.log(foo);
}

let matrix = function () {
    let matrix = [
        [1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9]
    ];
    console.table(matrix);
    console.table(matrix[0]);
};

matrix();