const human = {
    name: "Ivan",
    eyesColor: "blue",
    walk() {
        console.log("walking");
    },
};

const goshe = Object.create(human);
console.log(goshe.name);
human.name = "hoho";
console.log(goshe.name);

function createHuman(name, eyeColor) {
    return {
        name,
        eyeColor,
        walk() {

        },
    };
}

const ivan = createHuman("Ivan", "blue");

