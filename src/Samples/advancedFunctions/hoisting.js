// hoiseted();

// function hoiseted() {
//     console.log("I am being hoisted");
// }

// // even with VAR function expressions are not being hoisted
// notHoisted();

// var notHoisted = function () {
//     console.log("Not hoisted");
// }


// This will also not be hoisted
willThisWork();

 var willThisWork = function willThisWork() {
    console.log("idk");
}

