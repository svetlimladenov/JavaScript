function* idGenerator() {
  let id = 0;
  while (true) {
    yield id;
    id += 1;
  }
}

const idIterator = idGenerator();

function getNewId() {
  return idIterator.next().value;
}

console.log(getNewId());

console.log("Do some work here");

const IdGenetor = {
  generator: function* generator() {
    let id = 1;
    while (true) {
      yield id;
      id += 1;
    }
  },
  createIterator() {
    this.iterator = this.generator();
  },
  get() {
    if (!this.iterator) {
      this.createIterator();
    }
    return this.iterator.next().value;
  }
};

console.log(IdGenetor.get());
console.log(IdGenetor.get());
console.log(IdGenetor.get());
