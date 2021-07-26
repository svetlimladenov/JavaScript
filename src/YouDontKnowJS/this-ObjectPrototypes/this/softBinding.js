/* eslint-disable prefer-rest-params */
/* eslint-disable no-extend-native */
function createSoftBinding() {
    if (!Function.prototype.softBind) {
        Function.prototype.softBind = function softBind(obj) {
            const self = this;
            const curried = [].slice.call(arguments, 1);
            const res = setTimeout(() => {}, 0);
            const bound = function bound() {
                self.apply(
                    !this || this === global ? obj : this,
                    curried.concat([].slice.call(arguments, 1))
                );
            };

            bound.prototype = Object.create(self.prototype);
            return bound;
        };
    }
}

createSoftBinding();

function foo() {
    console.log(this.a);
}

const obj = {
    a: "obj"
};

const obj2 = {
    a: "obj2"
};

function hardBindingExample() {
    const baz = foo.bind(obj); // hard binding
    baz(); // when foo is called 'this' is bound to obj
    baz.call(obj2); // even though we manually with explicit binding try to mutate the this, its impossible. 'this' will still be bound to obj
    setTimeout(baz, 100);
}

//hardBindingExample();

function softBindingExample() {
    const bar = foo.softBind(obj);
    bar(); // in the apply check, we see that 'this' is global so we replace it with obj

    bar.call(obj2); // in the apply check now we see that 'this' is obj2 (aka different from global), so instead we pass obj2 as 'this'
    const testSoft = {
        a: 99,
        bar
    };

    testSoft.bar(); // in the apply check now 'this' is implicitly bound to the testSoft obj, its different from global, so we use it for 'this' binding

    setTimeout(bar, 100); // but here it fails, our softbinding fails, because we expect that setTimeout will call our function with default binding
    // but actually it uses a implicit binind (aka as a method, part of an object)
}

softBindingExample();
