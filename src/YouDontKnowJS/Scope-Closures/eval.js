function foo(str, a) {
    eval( str ); // cheating!
    console.log(a, b);
}

var b = 2;
foo( "var b = 3;", 1 );
