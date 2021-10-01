// the code inside out geneator is the stuff we write over and over again,
// its like are inside an async function, where we call await getData(10)
// and we are not blocking anything
function getData(d) {
  setTimeout(() => {
    console.log(d);
    iterator.next(d);
  }, 1000);
}

function* generator() {
  const x = 1 + (yield getData(10));
  const y = 1 + (yield getData(30));

  const answer = yield getData(`Meaning of life ${x + y}`);
  console.log(answer);
}

const iterator = generator();
iterator.next();

console.log("yeey");
