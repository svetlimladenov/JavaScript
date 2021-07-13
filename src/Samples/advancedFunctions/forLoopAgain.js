// letDemo();

// varDemo();

function varDemo() {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 0);
    }
}

function letDemo() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 0);
    }
}

letDemo();