const person = function person(firstName, lastName, age) {
    const printName = function printName() {
        return (firstName + ' ' + lastName);
    }

    const getAge = function getAge() {
        return age;
    }

    const saveToDb = function saveToDb() {
        console.log('Saving to the database ...');
    }

    return { printName, getAge, saveToDb };
}

let me = person('Svetlin', 'Mld', 21);

me.saveToDb();