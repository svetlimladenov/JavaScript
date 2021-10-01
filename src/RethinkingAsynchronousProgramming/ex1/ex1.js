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
// The old-n-busted callback way

const files = [];

function getFile(file) {
  getData(file, (text) => {
    handleResponse(file, text);
  });
}

const responses = {};
function handleResponse(filename, content) {
  if (!(filename in responses)) {
    responses[filename] = content;
  }

  const filenames = ["file1", "file2", "file3"];
  for (let i = 0; i < filenames.length; i += 1) {
    if (filenames[i] in responses) {
      if (typeof responses[filenames[i]] === "string") {
        output(responses[filenames[i]]);
        responses[filenames[i]] = false;
      }
    } else {
      return;
    }
  }

  output("Completed");
}

// request all files at once in "parallel"

getFile("file1");
getFile("file2");
getFile("file3");
