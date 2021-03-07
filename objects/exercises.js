/* eslint-disable max-len */
/* eslint-disable no-else-return */
/* eslint-disable comma-dangle */
const heroicInventory = function heroicInventory(input) {
    const result = input.map((hero) => {
        const [name, level, ...items] = hero.split(' / ');
        return {
            name,
            level: +level,
            items
        };
    });

    console.log(JSON.stringify(result));
};

const data = [
    'Isacc / 25 / Apple / Test / Kopele',
    'Derek / 12 / BarrelVest / DestructionSword',
    'Hes / 1 / Desolator / Sentinel / Antara'
];

const cappyJuice = function cappyJuice(input) {
    const result = input.reduce((acc, curr) => {
        const [name, quantity] = curr.split(' => ');
        if (!acc[name]) {
            acc[name] = {
                name,
                quantity: 0
            };
        }

        acc[name].quantity += +quantity;

        if (acc[name].quantity > 1000) {
            if (acc.order.indexOf(name) < 0) {
                acc.order.push(name);
            }
            acc[name].bottles = acc[name].quantity / 1000;
        }

        return acc;
    }, {
        order: []
    });

    result.order.forEach((x) => console.log(`${result[x].name} => ${parseInt(result[x].bottles)}`));
};

const cappyData = [
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789',
];

const storeCatalogue = function storeCatalogue(input) {
    const allItems = input.map((line) => {
        const [product, price] = line.split(" : ");
        return {
            product,
            price: +price
        };
    });

    const groups = allItems.reduce((acc, curr) => {
        const firstLetter = curr.product[0];
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(curr);
        return acc;
    }, {});

    const sortedKeys = Object.keys(groups).sort();

    const sortKey = (a, b) => {
        if (a.product < b.product) {
            return -1;
        }
        if (a.product > b.product) {
            return 1;
        }
        return 0;
    };

    sortedKeys.forEach((key) => {
        console.log(key);
        groups[key].sort(sortKey).forEach((product) => {
            console.log(`  ${product.product}: ${product.price}`);
        });
    });
};

const storeData = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
];

// storeCatalogue(storeData);

const usernames = function usernames(input) {
    const store = new Set(input);
    const compareNames = (a, b) => {
        if (a.length > b.length) { // if the first value if bigger the second value we return positive number
            return 1;
        } else if (b.length > a.length) { // if the second value if lower the the first sort must return negative number
            return -1;
        }

        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    };
    Array.from(store).sort(compareNames).forEach((name) => console.log(name));
};

const usernamesData = ['Denise',
    'Ignatius',
    'Iris',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
];

// usernames(usernamesData);

const systemComponents = function systemComponents(input) {
    const store = input.reduce((acc, curr) => {
        const [systemName, componentName, subcomponentName] = curr.split(' | ');

        if (acc.findIndex((x) => x.name === systemName) < 0) {
            acc.push({
                name: systemName,
                components: []
            });
        }

        const systemIndex = acc.findIndex((x) => x.name === systemName);

        if (acc[systemIndex].components.findIndex((x) => x.componentName === componentName) < 0) {
            acc[systemIndex].components.push({
                componentName,
                subComponents: []
            });
        }

        const componentIndex = acc[systemIndex].components.findIndex((x) => x.componentName === componentName);

        if (acc[systemIndex].components[componentIndex].subComponents.findIndex((x) => x.name === subcomponentName) < 0) {
            acc[systemIndex].components[componentIndex].subComponents.push({
                name: subcomponentName
            });
        }

        return acc;
    }, []);

    const sortStore = function sortStore(a, b) {
        if (b.components.length > a.components.length) {
            return 1;
        } else if (b.components.length < a.components.length) {
            return -1;
        }

        if (a.name > b.name) {
            return 1;
        } else if (a.name === b.name) {
            return 0;
        } else if (a.name < b.name) {
            return -1;
        }
    };

    store.sort(sortStore);

    store.forEach((system) => {
        console.log(system.name);
        system.components.sort((a, b) => b.subComponents.length - a.subComponents.length);
        system.components.forEach((cmp) => {
            console.log(`|||${cmp.componentName}`);
            cmp.subComponents.forEach((sub) => {
                console.log(`||||||${sub.name}`);
            });
        });
    });
};

const system = {
    name: 'SULS',
    components: [{
        coponentName: 'MainSite',
        subComponents: [{
            name: 'Home Page'
        },
        {
            name: 'Login Page'
        }
        ]
    },
    {
        coponentName: 'Judge Site',
        subComponents: [{
            name: 'Login Page',
        },
        {
            name: 'Submission Page'
        }
        ]
    }
    ]
};

const componentsData = [
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
];

// systemComponents(componentsData);

const uniqueSequences = function uniqueSequences(input) {
    const collections = input.reduce((acc, curr) => {
        const justNumbers = curr.slice(0, curr.length - 1).slice(1, curr.length);
        const numbers = justNumbers.split(', ').map((x) => +x).sort((a, b) => b - a);
        const stringRepresentation = numbers.join();
        if (acc.findIndex((collection) => collection.stringRepresentation === stringRepresentation) >= 0) {
            return acc;
        }

        acc.push({
            numbers,
            stringRepresentation
        });
        return acc;
    }, []);

    collections.sort((a, b) => a.numbers.length - b.numbers.length).forEach((x) => {
        console.log(`[${x.numbers.join(', ')}]`);
    });
};

// uniqueSequences(["[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"
// ]);

const arena = function arena(input) {
    const registerGladiator = function registerGladiator(line, store) {
        const localDb = JSON.parse(JSON.stringify(store));
        const [name, skill, power] = line.split(' -> ');
        const gladiator = localDb[name];
        if (!gladiator) {
            localDb[name] = {
                name,
                skills: [
                    {
                        name: skill,
                        power: +power
                    }
                ],
                isAlive: true
            };
            return localDb;
        }

        const dbSkill = gladiator.skills.find((x) => x.name === skill);
        if (!dbSkill) {
            gladiator.skills.push({
                name: skill,
                power: +power
            });
        } else if (dbSkill.power < power) {
            dbSkill.power = power;
        }

        return localDb;
    };

    const fight = function fight(store, a, b) {
        const localDb = JSON.parse(JSON.stringify(store));
        if (!a || !b) {
            return localDb;
        }

        a.skills.some((skill) => {
            const skillName = skill.name;
            const bSkill = b.skills.find((x) => x.name === skillName);
            if (bSkill) {
                const looser = skill.power > bSkill.power ? b.name : a.name;
                localDb[looser].isAlive = false;
                return true;
            }

            return false;
        });

        return localDb;
    };

    const printFinal = function printFinal(store) {
        const sortSkills = (a, b) => {
            if (b.power > a.power) {
                return 1;
            } else if (b.power < a.power) {
                return -1;
            }

            if (a.name > b.name) {
                return 1;
            } else if (a.name === b.name) {
                return 0;
            } else if (a.name < b.name) {
                return -1;
            }
        };

        Object.keys(store)
            .filter((x) => {
                return store[x].isAlive;
            })
            .sort((a, b) => {
                const gladiatorA = store[a];
                const gladiatorB = store[b];

                const totalPowerA = gladiatorA.skills.reduce((acc, curr) => {
                    return acc + curr.power;
                }, 0);

                const totalPowerB = gladiatorB.skills.reduce((acc, curr) => {
                    return acc + curr.power;
                }, 0);

                if (totalPowerB > totalPowerA) {
                    return 1;
                } else if (totalPowerB < totalPowerA) {
                    return -1;
                }

                if (gladiatorA.name > gladiatorB.name) {
                    return 1;
                } else if (gladiatorA.name === gladiatorB.name) {
                    return 0;
                } else if (gladiatorA.name < gladiatorB.name) {
                    return -1;
                }
            })
            .forEach((key) => {
                const totalPower = store[key].skills.reduce((acc, curr) => {
                    return acc + curr.power;
                }, 0);
                console.log(`${store[key].name}: ${totalPower} skill`);
                store[key].skills
                    .sort(sortSkills)
                    .forEach((skill) => {
                        console.log(`- ${skill.name} <!> ${skill.power}`);
                    });
            });
    };

    const commands = input; //.split('\n');
    let store = {};
    commands.some((command) => {
        if (command === 'Ave Cesar') {
            printFinal(store);
            return true;
        }

        const commandParts = command.split(' ');
        if (commandParts.indexOf('->') >= 0) {
            store = registerGladiator(command, store);
            return false;
        } else {
            store = fight(store, store[commandParts[0]], store[commandParts[2]]);
            return false;
        }
    });
};

// arena(`Pesho -> Duck -> 400
// Julius -> Shield -> 150
// Gladius -> Heal -> 200
// Gladius -> Support -> 250
// Gladius -> Shield -> 250
// Pesho vs Gladius
// Gladius vs Julius
// Gladius vs Gosho
// Ave Cesar
// `);


arena(`Pesho -> BattleCry -> 400
Gosho -> PowerPunch -> 300
Stamat -> Duck -> 200
Stamat -> Tiger -> 250
Ave Cesar`);