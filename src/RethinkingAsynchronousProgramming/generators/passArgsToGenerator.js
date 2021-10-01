// function coroutine(generator) {
//   const iterator = generator();

//   return function () {
//     return iterator.next.apply(iterator, arguments);
//   };
// }

// const run = coroutine(function* g() {
//   const x = 1 + (yield);
//   const y = 1 + (yield);
//   yield x + y;
// });

// run();
// run(10);
// console.log(`Meaning of life: ${run(30).value}`);

function* generator() {
  console.log("start");
  const x = 1 + (yield);
  const y = 1 + (yield); // we stop and ask for a question,
  yield x + y; // it will yeal out a value - { value: 42, done: false}
}

const iterator = generator();

iterator.next(); // we start the iterator, it logs the start, and it stops at the 1 + yield
iterator.next(10); // we result from the 1 + yeild, as we pass 10 to the yield, and we have x = 11
console.log(
  `Meaning of life ${iterator.next(30).value}`
); /* we pass 30 to the yield and we resume the execution,
   then the yeild 42 return { value: 32, done : false } and we use .value to log it */
