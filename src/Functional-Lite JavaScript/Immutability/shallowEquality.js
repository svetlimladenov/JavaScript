const { Map, List } = require("immutable");

/* eslint-disable no-restricted-syntax */
function shallowEqual(objA, objB) {
    // Test for A keys differ from B keys
    for (const key in objA) {
        if (!(key in objB) || objA[key] !== objB[key]) {
            return false;
        }
    }

    for (const key in objB) {
        if (!(key in objA)) {
            return false;
        }
    }

    return true;
}

function basicSample() {
    const data = {
        a: 2,
        b: "b",
        refProperty: [1, 2, 3]
    };

    function doSomething(data) {
        const obj2 = Object.assign({}, data);
        obj2.a = 9999;
        return obj2;
    }

    const newData = doSomething(data);
    console.log(shallowEqual(data, newData)); // false, cool it works

    function doSomethingWithReference(data) {
        const obj2 = Object.assign({}, data);
        obj2.refProperty.push(15);
        return obj2;
    }

    const newNewData = doSomethingWithReference(newData);
    console.log(shallowEqual(newData, newNewData)); // true, because of the reference equality its actuall true, so we won't rerender because the old state is the same as the new state
    // problem, because its not actually true

    const immutableData = Map({
        name: "Ivan",
        films: Map({
            got: true
        })
    });

    function editImmutableData(data) {
        const newData = data.setIn(["films", "got"], false);
        return newData;
    }

    const editedImmutable = editImmutableData(immutableData);

    console.log(shallowEqual(immutableData, editImmutableData)); // false
}

function shouldComponentUpdate(nextState) {
    return !shallowEqual(this.state, nextState);
}

function testWithNormalObjects() {
    const component = {
        state: {
            title: "HEADING",
            users: [1, 2, 3]
        }
    };

    function addUser(id) {
        const newState = Object.assign({}, this.state);
        // console.log(newState === this.state); // false, its a new object
        newState.users.push(id);
        if (shouldComponentUpdate.call(this, newState)) {
            console.log("Component rerenders/updates for the new user added"); // unfortunatly the component did not update, even though we added new user
        }
    }

    function changeTitle(title) {
        const newState = Object.assign({}, this.state);
        newState.title = title;
        if (shouldComponentUpdate.call(this, newState)) {
            console.log("Component rerenders/updates for the Title");
        }
    }

    addUser.call(component, 4);
    changeTitle.call(component, "UPDATED");
}

testWithNormalObjects();

function testWithImmutableObjects() {
    const component = {
        state: Map({
            title: "HEADING",
            users: List([1, 2, 3])
        })
    };

    function addUser(id) {
        const newState = this.state.get("users").push(4);
        if (shouldComponentUpdate.call(this, newState)) {
            console.log("Component rerenders/updates for the new user added"); // unfortunatly the component did not update, even though we added new user
        }
    }

    function changeTitle(title) {
        const newState = this.state.set("title", "Updated");
        if (shouldComponentUpdate.call(this, newState)) {
            console.log("Component rerenders/updates for the Title");
        }

        console.log(newState.get("title")); // updated
    }

    addUser.call(component, 4);
    changeTitle.call(component, "UPDATED");
}

testWithImmutableObjects();
