function fakeAjax(url, cb) {
  const fakeResponses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text"
  };
  const randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log(`Requesting: ${url}`);

  setTimeout(() => {
    cb(fakeResponses[url]);
  }, randomDelay);
}

// const p1 = new Promise((resolve, reject) => {
//   fakeAjax("file1", resolve);
// });

function logResponse(content) {
  console.log(content);
}

// p1.then(logResponse);

// console.log("waiting..");

class PromiseCopy {
  constructor(executor) {
    this.handlers = [];
    this.state = "pending";
    executor.call(this, this.resolve.bind(this));
  }

  resolve(...args) {
    this.handlers.map((handler) => handler(...args));
  }

  then(cb) {
    this.handlers.push(cb);
  }
}

const p2 = new PromiseCopy((resolve) => {
  setTimeout(() => {
    resolve("res");
  }, 2000);
});

p2.then((text) => {
  console.log(text);
});

console.log("Waiting for response");
