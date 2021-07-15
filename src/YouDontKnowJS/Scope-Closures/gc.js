// Garbage Collection sample

function bar() {
    function process(data) {
        // do smth with the data
        console.log(data.name);
    }

    {
        const bigData = { name: "Ivan" };
        process(bigData);
    }

    setTimeout(function timeout() {
        console.log("timeout expired"); // depending on the engine implentation we might have a closure to the whole bar function, so we cant garbage collect the bigData
        console.log(bigData); // when we make an explicit scope with {..} not we cant access the big data, ReferencError with be throw, and it will be garbage collected
    }, 1000);
}

bar();
