function foreachLoop() {
    let dogs = ['Husky', 'German Shepard', 'Sharo', 'Husky'];

    dogs.forEach((item, index) => {
        console.log(item + index);
    });
}


function find_filter() {   
    let dogs = ['Husky', 'German Shepard', 'Sharo', 'Husky'];
    let res = dogs.filter((dog) => {
        return dog === 'Husky';
    });
    
    let a = dogs.filter((dog) => dog === 'Husky');
    
    console.log(res); 
}

function mapFunc() {
    let dogs = [
        {
            name : 'Pesho',
            address: 'asdfa'
        }, {
            name : 'Gosho',
            address: 'asdfa'
        }, {
            name : 'Ivan',
            address: 'asdfa'
        }, {
            address: 'asdfa'
        },
    ];

    let names = dogs
        .filter((dog) => {
            return dog.name !== undefined;
        })
        .map((dog) => {
            return dog.name;
        })
        .forEach((x) => {
            console.log(x);
        })
        .filter((x) => {
            console.log('Filter');
        });
    console.log(names);
}

let reduceFunc = function reduceFunc() {
    let nums = [1, 2, 3, 4, 5];
    let sum = nums.reduce((previus, curr) => {
        let currentSum = previus + curr;
        return currentSum;
    }, 0);
  
    
    let dogs = [
        {
            name : 'Pesho',
            address: 'asdfa'
        }, {
            name : 'Gosho',
            address: 'asdfa'
        }, {
            name : 'Ivan',
            address: 'asdfa'
        }, {
            address: 'asdfa'
        },
    ];

    let vprqg = dogs
        .filter((dog) => {
            return dog.name !== undefined;
        })
        .reduce((acc, curr) => {
            acc[curr.name] = 'kuche';
            return acc;
        },{});
};


function matrixIncementEveryElement() {
    let matrix = [[1, 2], [3, 4]];

    let matrixCopy = matrix.map((row) => {
        return row.map((element) => {
            return ++element;
        });
    });

    console.table(matrix);
    console.table(matrixCopy);
}

let sortArr = function sortArr() {
    let arr = [1, 5, 2, 100, 55, 2, -6];
    console.log(arr.sort((a, b) => a - b));
};

// inpure functions
let someBadExample = function someExample() {
    let myCart = [];
    function addToCard(cart, item) {
        cart.push(item);
    }

    addToCard(myCart, 1);
    console.log(myCart);
};

someBadExample();


// Pure functions
let someGoodExample = function someExample() {
    let myCart = [];
    function addToCard(cart, item) {
        //let localCart = cart.slice(0); // copy the passed array
        let localCart = cart;
        localCart.push(item);
        return localCart;
    }

    let myNewCart = addToCard(myCart, 1);
    myNewCart = addToCard(myCart, 2);
    console.log(myCart);
    console.log(myNewCart);
}; 

someGoodExample();
