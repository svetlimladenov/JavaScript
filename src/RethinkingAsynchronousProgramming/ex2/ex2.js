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

// **************************************

function getFile(file) {
  let text;
  let fn;
  getData(file, function (response) {
    if (fn) {
      fn(response);
    } else {
      text = response;
    }
  });

  return function (cb) {
    if (text) {
      cb(text);
    } else {
      fn = cb;
    }
  };
}

const th1 = getFile("file1");
const th2 = getFile("file2");
const th3 = getFile("file3");

th1((text1) => {
  output(text1);
  th2((text2) => {
    output(text2);
    th3((text3) => {
      output(text3);
      output("Completed!");
    });
  });
});

// getFile("file2");
// getFile("file3");

// request all files at once in "parallel"
// ???
