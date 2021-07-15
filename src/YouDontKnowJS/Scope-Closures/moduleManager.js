// Very similar to some module managers, they are not magic, like RequireJS, they just take advantage of lexical scoping and closures

const requireJS = (() => {
    const modules = {};

    function require(name) {
        return modules[name];
    }

    function resolveDependencies(dependencies) {
        const resolved = [];
        for (let i = 0; i < dependencies.length; i += 1) {
            resolved.push(modules[dependencies[i]]);
        }

        return resolved;
    }

    function define(name, dependencies, fn) {
        const resolved = resolveDependencies(dependencies);
        modules[name] = fn.apply(fn, resolved);
    }

    return {
        define,
        require,
    };
})();

requireJS.define("connectionStringParses", [], () => {
    return {
        generateConnectionString(config) {
            return `Server=${config.server};Database=${config.database}`;
        },
    };
});

requireJS.define(
    "databaseManager",
    ["connectionStringParses"],
    (connectionStringParses) => {
        const database = {
            query(string) {
                return `Invalid sql query...${string}`;
            },
        };

        function connect(config) {
            const connectionString =
                connectionStringParses.generateConnectionString(config);
            console.log("Attempting to connect...");
            console.log(`Using connection string: ${connectionString}`);
            setTimeout(() => {
                console.log("Succesfully connected");
            }, 2000);

            return database;
        }

        return {
            connect,
        };
    }
);

const dbManager = requireJS.require("databaseManager");
dbManager.connect({ server: "localhost", database: "mongo" });
