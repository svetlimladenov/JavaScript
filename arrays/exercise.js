const everyNnumber = function everyNnumber(input) {
    let n = input[input.length - 1];
    input.forEach((x, i) => {
        if (i % n === 0 && i !== (input.length - 1)) {
            console.log(x);
        }
    });
};




//closure
function init() {
    let state = 0;
    function increment() {
        state++;
        return state;
    }
    increment();
}   


// Closure becomes important when the nested function survives the invocation of the parent.

function initTimer(){
    let state = 0;
      
    setTimeout(function increment(){
        state += 1;
        return state;
    }, 60000);
}


let easy = function easy(input) {
    let initial = 1;
    let actions = {
        add : (n) => {
            return n + 1; 
        },
        remove : (n) => {
            return n - 1;
        }
    };

    let result = input.reduce((acc, curr) => {
        console.log(acc);
        return actions[curr](acc);
    }, initial);

    return result;
};

// let res = easy(['add','add','remove','add','add']);


const rotateArr = function rotateArr(input) {
    let arrCopy = [].concat(input);
    let rotationsCount = +arrCopy.pop();
    for (let i = 0; i < rotationsCount; i++) {
        let lastElement = arrCopy.pop();
        arrCopy.unshift(lastElement);
    }
    return arrCopy;
};


const orbit = function orbit(input) {
    const generateMatrix = (rows, cols, x ,y) => {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix.push([]);
            for (let j = 0; j < cols; j++) {
                if (i === x && y === j) {
                    matrix[i].push(1);
                    continue;
                }
                matrix[i].push(0);
            }
        }
        return matrix;
    };

    const printMatrix = (matrix) => {
        matrix.forEach((row) => {
            console.log(row.join(' '));
        });
    };


    const fill = function fill(matrix, n) {
        const rowsCount = matrix.length;
        const colsCount = matrix[0].length;
        let result = matrix.map((row, i) => {
            return row.map((number, j) => {
                if (number === 0) {        
                    if (j - 1 >= 0 && matrix[i][j - 1] === n) {
                        return n + 1;
                    } else if (j + 1 < colsCount && matrix[i][j + 1] === n) {
                        return n + 1;
                    } else if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1] === n) {
                        return n + 1;
                    } else if (i - 1 >= 0 && matrix[i - 1][j] === n) {
                        return n + 1;
                    } else if (i - 1 >= 0 && j + 1 < colsCount && matrix[i - 1][j + 1]) {
                        return n + 1;
                    } else if(i + 1 < rowsCount && j - 1 >= 0 && matrix[i + 1][j - 1] === n) {
                        return n + 1;
                    } else if (i + 1 < rowsCount && matrix[i + 1][j] === n) {
                        return n + 1;
                    } else if (i + 1 < rowsCount && j + 1 < colsCount && matrix[i + 1][j + 1] === n) {
                        return n + 1;
                    }    
                }
                return number;
            });
        });
        return result;
    };
    
    const checkIfDone = (matrix) => {
        let zerosCount = matrix.filter(row => {
            let items = row.filter(col => {
                return col === 0;
            });
            return items.length > 0;
        });
        return zerosCount.length <= 0;
    };

    const x = input[2];
    const y = input[3];
    let matrix = generateMatrix(input[0], input[1], x, y);

    let n = 1;
    while(!checkIfDone(matrix)) {
        matrix = fill(matrix, n);        
        n++;
    }

    printMatrix(matrix);
};

orbit([11,11, 3, 9]);
