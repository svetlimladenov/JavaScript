function getData(url, cb) {
  const fake_responses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text"
  };
  const randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log("Requesting: " + url);

  setTimeout(() => {
    cb(fake_responses[url]);
  }, randomDelay);
}

function output(text) {
  console.log(text);
}

// **************************************

function getFile(file) {
  return new Promise((resolve) => {
    getData(file, resolve);
  });
}

const file1Promise = getFile("file1");
const file2Promise = getFile("file2");
const file3Promise = getFile("file3");

file1Promise
  .then((res) => {
    output(res);
    return file2Promise; // chaining promises
  })
  .then((res) => {
    // waiting for file2Promise
    output(res);
    return file3Promise;
  })
  .then((res) => {
    output(res);
    output("Completed");
  });

// async function print() {
//   output(await file1Promise);
//   output(await file2Promise);
//   output(await file3Promise);
// }

// print();
