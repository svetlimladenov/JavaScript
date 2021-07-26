const arr = ["foo", 1, "baaaz"];

arr["2"] = "changed baaz";

arr[100] = "wtf";

console.log(arr.length);

arr.forEach((x) => console.log(x));

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}
