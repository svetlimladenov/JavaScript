function asyncAdd(x, y, cb) {
  setTimeout(() => {
    const sum = x + y;
    cb(sum);
  }, 1000);
}

const file1 = function thunk(cb) {
  asyncAdd(10, 15, cb);
};

file1((sum) => {
  console.log(sum);
});

function makeThunk(a, b) {
  asyncAdd(a, b, cb);
  return function (cb) {
    asyncAdd(a, b, cb);
  };
}

const thuk2 = makeThunk(10, 20);

thuk2((sum) => {
  console.log(sum);
});
