function firstSample() {
  function* gen() {
    console.log("Hello");
    yield;
    console.log("World");
  }

  const it = gen();

  it.next();

  console.log("w");
  it.next();
}

function secondSample() {
  function* main() {
    yield 1;
    yield 2;
    yield 3;
  }

  const iterator = main();
  console.log(typeof iterator);
  for (const iterator of iterator) {
    console.log(iterator);
  }

  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());

  console.log(iterator.next());
}

secondSample();
