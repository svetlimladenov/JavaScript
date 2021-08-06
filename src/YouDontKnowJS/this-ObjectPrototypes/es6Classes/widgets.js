/* eslint-disable max-classes-per-file */
class Widget {
    constructor(width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    }

    render($where) {
        if (this.$elem) {
            console.log(
                `Rendering an element with height - ${this.height} 
                and width - ${this.width}`
            );
        }
    }
}

class Button extends Widget {
    constructor(width, height, label) {
        super(width, height);
        this.label = label || "Default";
        this.$elem = "Button element";
    }

    render($where) {
        super.render($where);
        console.log("Attaching even listener on the element");
    }

    onClick(e) {
        console.log(`Button ${this.$elem} clicked`);
    }
}
