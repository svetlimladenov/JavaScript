function foo() {
    let a = 10;
    bar();
    function bar() {
        console.log(a)
        function rest() {
            console.log(a)
            var b = 10;
        }
        rest();
    }
    bar();
}

// foo();

// Closure
function getGames() {
    let games = ["Monopoly", "Game Of Thrones"];

    function getMyGames(user) {
        if (user === "mom") {
            return games[0];
        }
        return games
    }
    
     function addGame(game){
        games.push(game);
    }

    return [getMyGames, addGame];
}

let functions = getGames();
let my = functions[0];
let add = functions[1];


console.log(my());
add("CSGO");
console.log(my());