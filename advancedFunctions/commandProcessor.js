const commandProcessor = function commandProcessor(commands) {
    const actions = {
        result: "",
        append(string) {
            this.result += string;
        },
        removeStart(count) {
            this.result = this.result.slice(count, this.result.length);
        },
        removeEnd(count) {
            this.result = this.result.slice(0, this.result.length - count);
        },
        print() {
            console.log(this.result);
        },
    };

    commands.forEach((command) => {
        const commandArgs = command.split(" ");
        const commandName = commandArgs.shift();
        actions[commandName](...commandArgs);
    });
};

commandProcessor(
    [
        "append hello",
        "append again",
        "removeStart 3",
        "removeEnd 4",
        "print",
    ],
);
