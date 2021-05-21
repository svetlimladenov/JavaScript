//problem();

function problem() {
    const foo = {
        name: "Pesho",
        movies: ["Harry Potter", "GOT", "LOTR"],
        printMovies: function printMovies() {
            this.movies.forEach(function (movie) {
                console.log(this === global); // this here will be the global object :/
                console.log(`${this.name} has watched ${movie}`);
            });
        },
    };

    foo.printMovies();
}

// bindSolution();

function bindSolution() {
    const foo = {
        name: "Pesho",
        movies: ["Harry Potter", "GOT", "LOTR"],
        printMovies: function printMovies() {
            function printing(movie) {
                console.log(this === global); // this here will be the global object :/
                console.log(`${this.name} has watched ${movie}`);
            }

            const myPrinting = printing.bind(this);

            this.movies.forEach(myPrinting);
        },
    };

    foo.printMovies();
}

// thatSolution();

function thatSolution() {
    const foo = {
        name: "Pesho",
        movies: ["Harry Potter", "GOT", "LOTR"],
        printMovies: function printMovies() {
            const that = this;
            this.movies.forEach(function (movie) {
                console.log(`${that.name} has watched ${movie}`);
            });
        },
    };

    foo.printMovies();
}

arrowFunctionSolution();

function arrowFunctionSolution() {
    const foo = {
        name: "Pesho",
        movies: ["Harry Potter", "GOT", "LOTR"],
        printMovies: function printMovies() {
            this.movies.forEach((movie) => {
                console.log(`${this.name} has watched ${movie}`);
            });
        },
    };

    foo.printMovies();
}
