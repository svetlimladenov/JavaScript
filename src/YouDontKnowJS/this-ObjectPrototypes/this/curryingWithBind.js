function foo(a, b, c) {
    console.log(`a:${a} b:${b} c: ${c}`);
}

const bar = foo.bind(null, 1, 2);
bar(3);
