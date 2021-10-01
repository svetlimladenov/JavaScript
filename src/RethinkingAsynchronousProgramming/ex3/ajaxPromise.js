function ajax(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { name: "Ivan" }, statusCode: 200 });
    }, 2000);
  });
}

const google = ajax("google").then((res) => {
  console.log(res);
});

console.log("test? ");
