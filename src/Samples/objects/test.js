let person = { name: "Name" };

function foo(person1) {
    let a = person1;
    function bar(aa) {
        aa.name = "Ivan";
    }
    bar(a);
}

foo(person);

console.log(person.name);