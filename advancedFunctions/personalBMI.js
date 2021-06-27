const personalBMI = function personalBMI(name, age, weight, height) {
    function Person(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.BMI = this.callculateBMI();
        this.status = this.getStatus();
    }

    Person.prototype.callculateBMI = function callculateBMI() {
        return Math.round(this.weight / ((this.height / 100) ** 2));
    };

    Person.prototype.getStatus = function getStatus() {
        if (this.BMI < 18.5) {
            return "underweight";
        }

        if (this.BMI < 25) {
            return "normal";
        }

        if (this.BMI < 30) {
            return "overweight";
        }

        return "obese";
    };

    Person.prototype.getInfo = function getInfo() {
        const result = {
            name: this.name,
            personalInfo: {
                age: this.age,
                weight: this.weight,
                height: this.height,
            },
            BMI: this.BMI,
            status: this.status,
        };

        if (this.status === "obese") {
            result.recommendation = "admission required";
        }

        return result;
    };

    const me = new Person(name, age, weight, height);

    return me.getInfo();
};

console.log(personalBMI("Honey Boo", 9, 57, 137));