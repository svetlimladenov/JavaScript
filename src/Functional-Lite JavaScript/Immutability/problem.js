function touchAndPrint(touchFn) {
    const data = { key: "value" };
    touchFn(data);
    console.log(data.key); // there is no way, in the scope of this function to know what will be printed here
}

touchAndPrint((data) => {
    data.key = "changed it";
});
