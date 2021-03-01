function namedLoop() {
    loop: for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (j === 5) {
                console.log('End');
                break loop;
            }
            console.log('j -' + j);
        }
        console.log('i -' + i);
    }
}

function forInLoop() {
    const obj = { name: 'Ivan', family : 'Petrov', age : 21 };
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {           
            console.log(obj[key]);        
        }
    }
}

function varScope() {
    var ivan = 1;
    var ivan = 2;
    console.log(ivan);
}

function objects() {  
    let obj = { name: 'Ivan', family : 'Petrov', age : 21 };
    obj.speak = () => { console.log('speaking'); };
    obj['talk'] = () => { console.log('talking'); };
    obj.speak();
    obj['talk']();
}


function linkage(){
    let mainObject = { legs : 2};
    let a = Object.create(mainObject);
    mainObject.legs = 10;
    console.log(a.legs);
    console.log(mainObject.legs);
}

linkage();  