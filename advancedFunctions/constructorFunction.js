function foo() {
    const arrow = () => {
        console.log(this);
    };

    arrow();

    const normalFunction = function normalFunction() {
        console.log(this); // will return the global onject since
    };

    normalFunction();
}

const bar = {
    foo,
};

bar.foo();


function Component(props) {
    this.props = props;
}

Component.prototype.render = () => {
    console.log(this); // will return empty object in node
};

Component.prototype.helperMethod = function helperMethod() {
    console.log(this); // will return the new object created
};

const myComponent = new Component({ name: "Ivan" });

myComponent.render();
myComponent.helperMethod();

class Component2 {
    constructor(props) {
        this.props = props;
    }
    
    helperMethod = () => {
        console.log(this); // will return the new object created
    }

    render() {
        console.log(this); // will return empty object in node
    }
}

const secondComponent = new Component2({name: "Ivan2"});
secondComponent.render();
secondComponent.helperMethod();