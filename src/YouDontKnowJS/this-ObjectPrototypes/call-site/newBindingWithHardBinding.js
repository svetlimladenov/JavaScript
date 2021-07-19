/* eslint-disable func-names */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-extend-native */
function foo(something) {
    this.a = something;
}

function newCanOverrideBind() {
    const obj = {};

    const bar = foo.bind(obj); // here we have hard-binding

    const constructedObj = new bar("ivan"); // new binding

    // Its looks like when using Function.propotype.bind(..) we are able to override the 'this'
    // inside the foo function to be the newly constucted object instead of the binded
    // But how is this even possible ?

    console.log(obj.a);
    // undefined
    // even though we bound obj to be the 'this', while calling the bar(..) function, looks like the new binding is overding this
    console.log(constructedObj.a); // ivan
}

// newCanOverrideBind();

function customBindFunction() {
    function bind(fn, ctx) {
        return function binded() {
            return fn.apply(ctx, arguments);
        };
    }

    const obj = {};
    const bar = bind(foo, obj);

    const constructedObj = new bar("goshe");
    console.log(obj);
    // now we can see that when using our custom hard-bind function, the new constructor call of the function cant ovveride 'this' in foo
    // this is still binded to obj
    console.log(constructedObj.a); // undefined, we did not attach anything to the newly created object
}

// customBindFunction();

function bindActualPolyfill() {
    function createPolifill() {
        if (!Function.prototype.bind) {
            Function.prototype.bind = function bind(oThis) {
                if (typeof this !== "function") {
                    throw new TypeError(
                        "Function.prototype.bind - what is tryng to be " +
                            "bound is not callabe"
                    );
                }

                var aArgs = Array.prototype.slice.call(arguments, 1); // thats a way to create arr from arguments
                var fToBind = this; // we make it so we can access it in fBound via closure
                var fNOP = function () {};
                var fBound = function () {
                    return fToBind.apply(
                        this instanceof fNOP && oThis ? this : oThis,
                        aArgs.concat(Array.prototype.slice.call(arguments)) // here we see the concatenation of both args, passed to bind, and to the bound function later
                    );
                };

                fNOP.prototype = this.prototype;
                fBound.prototype = new fNOP();
                // because of this later we can check if the function was called with 'new'
                // when you call a function with new
                // the second step is to make the newly created object [[Prototype]]-linked
                // so the new object, will be linked to fNop()
                // and later when we check
                // this instanceof fNOP will result in 'true'
                // 'this' is the newly created object by calling it with new() and its instance of fNOP

                return fBound;
            };
        }
    }

    Function.prototype.bind = undefined;
    createPolifill();

    const obj = {
        cool: 15
    };

    const bar = foo.bind(obj);

    const oneObj = new bar(5);
    console.log(oneObj);
}

bindActualPolyfill();
