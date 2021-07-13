const animal = {
    name: "Ivan",
};

const person = Object.create(animal);
person.age = 20;

// bad
for (const key in person) {
    // console.log(key);
}

console.log('----');

// most common way
Object.keys(person).forEach((key) => {
    // console.log(key);
});

const sf = {
    name: "Sofia",
    polulation: 1000000,
    size: 5,
};

const kn = {
    name: "Kyustendil",
    polulation: 40000,
    size: 100,
};

const pl = {
    name: "Plovdiv",
    polulation: 30000,
    size: 15,
};

const vr = {
    name: "Varna",
    polulation: 200000,
    size: 40,
};

const western = {
    sf,
    kn,
};

const eastern = {
    pl,
    vr,
};

const bulgaria = [western, eastern];

const sortedBulgaria = bulgaria.sort((a, b) => {
    const aPopulation = Object.values(a).reduce((acc, curr) => {
        return acc + curr.polulation;
    }, 0);

    const bPopulation = Object.keys(b).reduce((acc, cur) => acc + b[cur].polulation, 0);
    return bPopulation - aPopulation;
});

console.log(sortedBulgaria);
