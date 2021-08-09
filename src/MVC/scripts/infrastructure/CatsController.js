const CatsModel = {
    addCat(name) {
        this.cats.push({ name, age: 5, color: "red" });
    },
    getCats() {
        return this.cats;
    },
    cats: [
        { name: "Joji", age: 2, color: "black" },
        { name: "Darko", age: 6, color: "black" },
        { name: "Marcho", age: 5, color: "orange" }
    ]
};

const CatsView = {
    build(cats) {
        const catsList = cats.map(
            (cat) =>
                `<p>Name: ${cat.name}, Age: ${cat.age}, Color: ${cat.color}</p>`
        );

        this.addButton = document.createElement("button");

        const element = document.createElement("div");

        return `
        <h1>Cats</h1>
        <input type="text" id="name"/>
        ${this.addButton}
        ${catsList.join("")}
        `;
    },
    bindAddCat(hander) {
        this.addButton.addEventListener("click", () => {
            const name = document.getElementById("name");
            hander(name.value);
        });
    }
};

const CatsController = {
    init() {
        const allCats = CatsModel.getCats();
        const catsView = CatsView.build(allCats);
        CatsView.bindAddCat(CatsModel.addCat);

        return catsView;
    }
};

export default CatsController;
