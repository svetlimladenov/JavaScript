/* eslint-disable prefer-arrow-callback */
const foo = {
    name: "Ivan",
    watchedFilms: [],
    watchFilm: function watchFilm(film) {
        this.watchedFilms.push(film);
    },
    arrowFlex: function arrowFlex() {
        this.watchedFilms.forEach((film) => {
            console.log(`${this.name} watched ${film}`);
        });
    },
    thatFlex: function thatFlex() {
        const that = this;
        this.watchedFilms.forEach(function printLine(film) {
            console.log(`${that.name} watched ${film}`);
        });
    },
    bindFlex: function bindFlex() {
        function printLine(film) {
            console.log(`${this.name} watched ${film}`);
        }
        const localPrint = printLine.bind(this);
        this.watchedFilms.forEach(localPrint);
    }
};

function Person() {
    console.log(this);
    console.log(this.sirName);
}

Person.prototype.sirName = "Ivan";

// const ivan = new Person();

const human = (() => {
    const humanActions = {
        walk: (speed, easing, direction) => {
            console.log(`${speed} ${easing} ${direction}`);
        },
        run: (speed, easing, direction) => {
            console.log(`${speed} ${easing} ${direction}`);
        },
        climb: (speed, easing, direction, height) => {
            console.log(`${speed} ${easing} ${direction} ${height}`);
        }
    };

    const speed = 1;
    const easing = "InOut";

    const result = {};
    Object.keys(humanActions).forEach((action) => {
        result[action] = function currentAction() {
            const args = [speed, easing];
            for (let i = 0; i < arguments.length; i += 1) {
                args.push(arguments[i]);
            }

            humanActions[action].apply(null, args);
        };
    });

    return result;

    // return {
    //     walk: (direction) => obj.walk(speed, easing, direction),
    //     run: (direction) => obj.run(speed, easing, direction),
    // };
})();

human.run("Home");
human.climb("Up", 1000);
