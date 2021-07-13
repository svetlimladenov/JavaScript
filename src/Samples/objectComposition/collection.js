// const collection = (() => {
//     let arr = [];
//     return {
//         add(el) {

//         },
//         remove(index) {

//         },
//         get(index){
//             return arr[index];
//         },
//         size: arr.length;
//     }
// })();

function SortedList() {
    this.collection = [];
}

SortedList.prototype.add = function add(el) {
    this.collection.push(el);
    this.collection.sort((a, b) => a - b);
    return this;
};

SortedList.prototype.get = function get(index) {
    return this.collection[index];
};

SortedList.prototype.remove = function remove(index) {
    this.collection.splice(index, 1);
    this.collection.sort((a, b) => a - b);
};

SortedList.prototype.size = function size() {
    return this.collection.length;
};

const myList = new SortedList();
myList.add(5).add(10).add(-4).add(-2);

console.log(myList.get(0));
myList.remove(0);
console.log(myList.get(0));

console.log(myList.size());
