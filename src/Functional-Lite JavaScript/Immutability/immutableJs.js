const { Map, List } = require("immutable");

function basicSample() {
    const map1 = Map({ a: 1, b: 2, c: 3 });
    const map2 = map1.set("b", 50);

    console.log(map1 === map2);

    console.log(`${map1.get("b")} vs. ${map2.get("b")}`); // 2 vs. 50

    const list = List(["goshe", "ivan"]);

    const peshoList = list.set(0, "pesho");
    const peshoToshoList = list.push("tosho");

    console.log(list); // List ["goshe", "ivan"]
    console.log(peshoList); // List ["pesho", "ivan"]
    console.log(peshoToshoList); // List ["pesho", "ivan", "tosho"]
}

function deepSample() {
    var deepFirst = Map({
        foo: Map({
            val: 10
        }),
        bar: Map({
            var: 20
        })
    });

    var deepSecond = deepFirst.setIn(["foo", "bar"], 500);

    console.log(deepFirst === deepSecond); // false;

    console.log(deepFirst.get("foo") === deepSecond.get("foo")); // false

    console.log(deepFirst.get("bar") === deepSecond.get("bar")); // true

    // true because we recycled it
}

deepSample();
