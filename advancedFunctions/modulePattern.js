const myFunc = (function() {
    let privateCounter = 1;

    return {
        add: function add(number) {
            privateCounter += number;
        },
        value: () => {
            return privateCounter;
        },
    };
}());

myFunc.add(5);

myFunc.add(6);


console.log(myFunc.value());