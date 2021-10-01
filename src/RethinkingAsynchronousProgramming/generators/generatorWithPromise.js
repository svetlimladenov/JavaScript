function simpleCallback() {
  function ajax(url, cb) {
    setTimeout(() => {
      const response = { name: "Luke" };
      cb(response);
    }, 1000);
  }

  ajax(1, (res) => {
    console.log(res);
  });
}

function thunkSample() {
  function ajax(url, cb) {
    setTimeout(() => {
      const response = { name: "Luke" };
      cb(response);
    }, 1000);
  }

  const thunk = function (cb) {
    // lazy thunk,
    ajax("luke", cb);
  };

  thunk((res) => {
    console.log(res);
  });
}

function activeThunkSample() {
  function ajax(url, cb) {
    console.log(`Requesting ${url}`);
    setTimeout(() => {
      const response = { name: url };
      cb(response);
    }, 1000);
  }

  const getData = function getData(url) {
    let res;
    let fn;
    ajax(url, (response) => {
      if (fn) {
        fn(response);
      } else {
        res = response;
      }
    });

    return (cb) => {
      if (res) {
        cb(res);
      } else {
        fn = cb;
      }
    };
  };

  const luke = getData("luke");
  const chubaka = getData("chubaka");

  luke((res) => {
    console.log(res.name);
    chubaka((chubakaRes) => {
      console.log(chubakaRes.name);
    });
  });
}

// activeThunkSample();

function logName({ name }) {
  console.log(name);
}

function promiseSample() {
  function ajax(url) {
    console.log(`Requesting ${url}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        const response = { name: url };
        resolve(response);
      }, 1000);
    });
  }

  const luke = ajax("luke");
  const chubaka = ajax("chubaka");

  luke
    .then(logName)
    .then(() => chubaka)
    .then(logName);
}

// promiseSample();

function promiseReducer() {
  function ajax(url) {
    console.log(`Requesting ${url}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        const response = { name: url };
        resolve(response);
      }, 1000);
    });
  }

  const characters = ["luke", "chubaka", "r2-d2"];

  characters.map(ajax).reduce((chain, promise) => {
    return chain.then(() => promise).then(logName);
  }, Promise.resolve());
}

// promiseReducer();

function generatorSample() {
  function ajax(url) {
    console.log(`requesting - ${url}`);
    setTimeout(() => {
      iterator.next({ name: url });
    }, 5000);
  }

  function* generator() {
    const chubaka = yield ajax("chubaka");
    const luke = yield ajax("luke");

    console.log(chubaka);
    console.log(luke);
  }

  const iterator = generator();
  iterator.next();

  console.log("log smth else ?");
}

// generatorSample();

function generatorWithPromiseSample() {
  function ajax(url) {
    console.log(`Requesting - ${url}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: url });
      }, 1000);
    });
  }

  function* generator() {
    const chubaka = ajax("chubaka");
    const luke = ajax("luke");

    const response = yield Promise.all([chubaka, luke]).then((results) => {
      iterator.next(results);
    });

    console.log(response);

    const r2d2 = yield ajax("rud2").then((res) => {
      iterator.next(res);
    });

    console.log(r2d2);
  }

  const iterator = generator();
  iterator.next();

  console.log("bahti qkoto");
}

generatorWithPromiseSample();

// function ajax(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "error") {
//         reject();
//       }
//       resolve({ name: "Luke" });
//     }, 1000);
//   });
// }

// const luke = ajax("asdf");
