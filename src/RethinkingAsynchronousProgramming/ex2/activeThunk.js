/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable camelcase */
/* eslint-disable no-var */

function getData(url, cb) {
  var fake_responses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text"
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log(`Requesting: ${url}`);

  setTimeout(function () {
    cb(fake_responses[url]);
  }, randomDelay);
}

function output(text) {
  console.log(text);
}

function getFile(file) {
  let result;
  let fn;

  getData(file, (res) => {
    if (fn) {
      fn(res);
    } else {
      result = res;
    }
  });

  return (cb) => {
    if (result) {
      cb(result);
    } else {
      fn = cb;
    }
  };
}

const thunk1 = getFile("file1");
const thunk2 = getFile("file2");
const thunk3 = getFile("file3");

thunk1((file) => {
  console.log(file);
  thunk2((file2) => {
    console.log(file2);
    thunk3((file3) => {
      console.log(file3);
    });
  });
});
