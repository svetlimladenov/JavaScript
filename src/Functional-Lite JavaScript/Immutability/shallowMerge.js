class Component {
    constructor() {
        this.state = {
            name: "Ivan",
            counter: 1
        };
    }

    setState(newState) {
        this.state = Object.assign(this.state, newState);
    }
}

const myComponent = new Component();

console.log(myComponent.state);

myComponent.setState({ counter: 4 });

console.log(myComponent.state);
