const sumFunc = function sumFunc(input) {
    let firstNumber = +input[0];
    let lastNumber = +input[input.length - 1];
    return firstNumber + lastNumber;
};

const evenNumbers = function evenNumbers(input) {
    let evens = input
        .map((num, index) => {
            if ((index + 1) % 2 !== 0) {
                return num;
            }
        })
        .filter(n => n)
        .join(' ');
    console.log(evens);
};

const negativePositive = function negativePositive(input) {
    let result = input.reduce((acc, curr) => {
        if (curr < 0) {
            acc.unshift(curr);
        } else {
            acc.push(curr);
        } 
        return acc;
    }, []);

    console.log(result.join('\n'));
};


const firstLastK = function firstLastK(input) {
    const k = input[0];
    let numbers = input.filter((n, index) => {
        return index;
    });

    let firstK = numbers.filter((n, index) => {
        return (index + 1) <= k;
    });

    let lastK = numbers.filter((n, index) => {
        return index >= numbers.length - k;
    });

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
};

const diagonalSum = function diagonalSum(matrix) {
    let firstDiagonalSum = matrix.reduce((acc, currRow, rowIndex) => {
        return acc + currRow.reduce((prev, currCol, colIndex) => {
            if (rowIndex === colIndex) {
                return prev + currCol;
            } else {
                return prev + 0;
            }
        }, 0);
    },0);

    let secondFiagonalSum = matrix.reduce((acc, currRow, rowIndex) => {
        return acc + currRow.reduce((prev, currCol, colIndex) => {
            if (rowIndex + colIndex === matrix.length - 1) {
                return prev + currCol;
            } else {
                return prev + 0;
            }
        }, 0);
    },0);


    console.log(firstDiagonalSum + ' ' + secondFiagonalSum);
};

