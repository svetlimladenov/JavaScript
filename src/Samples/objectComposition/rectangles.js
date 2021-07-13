const rectangleFactory = (input) => {
    const [width, height] = input;
    return {
        area() {
            return width * height;
        },
        compateTo(other) {

        },
    };
};

const rectangle = rectangleFactory([20, 30]);
console.log(rectangle.area());