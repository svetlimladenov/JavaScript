
const calculateLowestPricesInCities = function calculateLowestPricesInCities(input) {
    const towns = input.map((element) => {
        const [townName, productName, price] = element.split(' | ');
        return {
            townName,
            productName,
            price: +price,
        };
    });

    const result = towns.reduce((acc, curr) => {
        if (!acc[curr.productName]) {
            acc[curr.productName] = curr;

            return acc;
        }

        if (acc[curr.productName].price > curr.price) {
            acc[curr.productName] = curr;
        }
        return acc;
    }, {});

    Object.keys(result).forEach((item) => {
        console.log(`${result[item].productName} -> ${result[item].price} (${result[item].townName})`);
    });
};

calculateLowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000',
]);
