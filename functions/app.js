console.log(0 || 11 || sdfa);

function a (b){
    return  
    {
        gosho : b
    }
}

let gosho = a(1);
console.log(gosho);




function bar (a) {
    a = a || 10;
    console.log(a);
}

bar(4);



//bad

function concateAll(){
    const args = Array.prototype.slice.call(arguments);
    console.log(args.join('-'));
}

concateAll(1, 2 ,3, true);

// good 
function concatenateAll(...args){
    console.log(args.join('-'));
}

concatenateAll(1,2,5,6,2,false);