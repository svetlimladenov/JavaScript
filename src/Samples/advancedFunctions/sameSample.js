const human = (() => {
    const actions = {
        walk: (speed, easing, direction) => {
            console.log(`Walking to ${direction}, speed - ${speed}, easing ${easing}`);
        },
        run: (speed, easing, direction) => {
            console.log(`Running to ${direction}, speed - ${speed}, easing ${easing}`);
        },
        climb: (speed, easing, direction, height) => {
            console.log(`Climbing towards ${direction}, with height ${height} speed - ${speed}, easing ${easing}`);
        },
    };

    let result = {};
    Object.keys(actions).forEach((key) => {
        const allArgs = [500, "InOut"];
        result[key] = (...args) => {
            allArgs.push(...args);
            actions[key].apply(null, allArgs);
        };
    });

    return result;
})();

human.walk("Home");
human.climb("Home", 1000);