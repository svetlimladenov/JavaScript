function bar(a) {
    console.log("first");
}

function bar(a, b){
    console.log("second");
}


var r = function run(a, b) {
    console.log("first");
}

var r = function run(a){
    console.log("second");
}


function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return;
        }      
    }
    return true;
}

function isPalindrome2(word) {
    return word === word.split("").reverse().join("");
}

console.log(isPalindrome2("abba"));