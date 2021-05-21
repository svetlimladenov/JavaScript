function foo() {
    console.log(this);
    function bar() {
        console.log(this);
    }

    bar();
}

// foo();

const arrow = () => {
    console.log(this); // empty object 
};

const buz = {
    name: "Ivan",
    watchedFilms: [],
    watchFilm: function watchFilm(film) {
        console.log(`${this.name} is watching ${film}`);
        this.watchedFilms.push(film);
    },
    showAllWatchedFilms: function showAllWatchedFilms() {
        console.log(`${this.name} has watched all these films: `);
        this.watchedFilms.forEach((film) => {
            console.log(`${film} - ${this.name}`);
        });
    },
};

// buz.watchFilm("GOT");
// buz.watchFilm("WUT");

// buz.showAllWatchedFilms();


function Person(name, age) {

    const talk = function talk() {
        console.log(this);
        console.log("Hello my name is", this.name);
    };

    return {
        name,
        age,
        talk,
    };
}

function DataContext(connectionString) {
    const connect = function connect() {
        console.log(`Establishing connection, using ${connectionString}`);
    };

    const getConnectionString = function getConnectionString() {
        return connectionString;
    };

    return {
        connect,
        getConnectionString,
    };
}

const myContext = new DataContext("server=SimpleSocial;source=SimpleSocial");
myContext.connect();

const conString = myContext.getConnectionString();
console.log(conString);