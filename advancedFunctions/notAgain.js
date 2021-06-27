const human = (() => {
    const humanActions = {
        walk(speed, easing, direction) {
            console.log(`${speed} ${easing} ${direction}`);
        },
        run(speed, easing, direction) {
            console.log(`${speed} ${easing} ${direction}`);
        },
        climb(speed, easing, direction, height) {
            console.log(`${speed} ${easing} ${direction} ${height}`);
        },
    };

    const speed = 1;
    const easing = "InOut";

    const result = {};
    Object.keys(humanActions).forEach((key) => {
        result[key] = function action() {
            const arr = [speed, easing];
            for (let i = 0; i < arguments.length; i += 1) {
                arr.push(arguments[i]);
            }

            humanActions[key].apply(null, arr);
        };
    });
})();

human.run("Home");

human.climb("Home", 1000);