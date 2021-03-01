function solve (input) {
    const getLimit = function (zone) {
        const rules = {
            motorway : 130,
            interstate : 90,
            city : 50,
            residential : 20
        };
        
        let limit = rules[zone];
        if (!limit) {
            throw new Error('Invalid zone!');
        }
        return limit;
    }

    const getInfraction = function (speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else if (overSpeed <= 20) {
            return 'speeding';
        } else if (overSpeed >= 20 && overSpeed < 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }

    const speed = input[0];
    const zone = input[1];
    let limit = getLimit(zone);
    let infraction = getInfraction(speed, limit);
    if (infraction) {
        console.log(infraction);
    }
}


const templateFormatter = function formatter(input) {
    function printHeader() {
        return '&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;\n';
    }

    function printElement(element, body) {
        let result = `<${element}>\n`;
        result += body;
        result += `</${element}>\n`
        return result;
    }

    function getInput(input) {
        let kvp = [];
        for (let i = 0; i < input.length; i+=2) {
            let pair = {
                question : input[i],
                answer : input[i + 1]
            }
            kvp.push(pair)
        }
        return kvp;
    }

    let answersAndQuestions = getInput(input);
    let result = printHeader();
    let body = "";
    answersAndQuestions.forEach(pair => {
        body += printElement('question', pair.question);
        body += printElement('answer', pair.answer);
    })
    result += printElement('quiz', body);
    console.log(result);
}

const cooking = function cooking(input) {
    const chop = (n) => {
        return n / 2;
    };
    const dice = (n) => {
        return Math.sqrt(n);
    }
    const spice = (n) => {
        return n + 1;
    }
    const bake = (n) => {
        return n * 3;
    }
    const fillet = (n) => {
        return n * 0.80;
    }
    let funcs = { chop, dice, spice, bake, fillet};

    let number = input[0];
    input.shift();
    input.forEach(action => {
        number = funcs[action](number);
        console.log(number);
    });
}

const modifyAvarage = function modify(num) {
    const getAvarage = (num) => {
        let sum = num.reduce((acc, currentValue) => acc + currentValue);
        return sum / num.length;
    }

    const arr = num.toString()
                    .split('')
                    .map(x => +x);
    while(getAvarage(arr) < 5) {
        arr.push(9);
    }

    return arr.join('');
}

console.log(modifyAvarage(5835));