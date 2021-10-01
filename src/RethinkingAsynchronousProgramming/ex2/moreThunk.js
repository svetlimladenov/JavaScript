function add(x, y) {
  return x + y;
}

// we can pass this thunk, everywhere, we can ship it anywhere
// you just call it and you get a value, you don't need to pass any args
const thunk = () => {
  return add(5, 10);
};

// console.log(thunk());

function asyncAdd(x, y, cb) {
  setTimeout(() => {
    cb(x + y);
  }, 1000);
}

const asyncThunk = function (cb) {
  asyncAdd(10, 15, cb);
};

asyncThunk((res) => {
  console.log(res);
});

function makeThunk(fn, ...args) {
  return function (cb) {
    fn(...args, cb);
  };
}

const anotherThunk = makeThunk(asyncAdd, 10, 15); // not too far from a Promise constuctor
anotherThunk((r) => {
  console.log(r);
});
