function getAsyncData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(data);
      resolve(data);
    }, 1000);
  });
}

async function test() {
  const x = 1 + (await getAsyncData(10));
  const y = 1 + (await getAsyncData(30));

  const answer = await getAsyncData(`Meaning of life ${x + y}`);
  console.log(answer);
}

test();

console.log("yeey");
