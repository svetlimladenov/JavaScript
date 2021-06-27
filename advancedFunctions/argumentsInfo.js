const argumentsInfo = function argumentsInfo(...args) {
    const obj = {
        types: [],
        result: [],
        fillResult() {
            args.forEach((argument) => {
                const type = typeof argument;
                this.result.push({
                    type,
                    value: argument,
                });
            });

            return this;
        },
        fillTypes() {
            args.forEach((argument) => {
                const type = typeof argument;
                const typeIndex = this.types.findIndex((element) => element.type === type);
                if (typeIndex < 0) {
                    this.types.push({
                        type,
                        count: 1,
                    });
                } else {
                    this.types[typeIndex].count += 1;
                }
            });

            return this;
        },
        orderTypes() {
            this.types.sort((a, b) => b.count - a.count);
            return this;
        },
        logResult() {
            this.result.forEach((arg) => {
                console.log(`${arg.type}: ${arg.value}`);
            });
            return this;
        },
        logTypes() {
            this.types.forEach((type) => {
                console.log(`${type.type} = ${type.count}`);
            });
            return this;
        },
    };

    obj
        .fillResult()
        .fillTypes()
        .orderTypes()
        .logResult()
        .logTypes();
};

argumentsInfo("cat","dog", 42, function () { console.log("Hello world!"); });