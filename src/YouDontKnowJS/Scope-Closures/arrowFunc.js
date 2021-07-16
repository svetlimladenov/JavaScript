/* eslint-disable prefer-arrow-callback */

const problem = {
    counter: 1,
    cool: function coolFn() {
        setTimeout(function timer() {
            console.log(this.counter);
            this.counter += 1;
        }, 100);
    },
};

problem.cool();

const selfSolution = {
    counter: 1,
    cool: function coolFn() {
        const self = this;
        setTimeout(function timer() {
            console.log(self.counter); // we make use of the closure and the lexical scope, can't find self here, go up and find in the coolFn
            self.counter += 1;
        }, 100);
    },
};

selfSolution.cool();

const arrowSolution = {
    counter: 2,
    cool: function coolFn() {
        setTimeout(() => {
            console.log(this.counter);
            this.counter += 1;
        }, 100);
    },
};

// Arrow function discard all the normal rules for this binding, and instead take on the this
// value of their immediate lexical enclosing scope, whatever it is.

// While this makes for shorter code, my perspective is that arrow func‐
// tions are really just codifying into the language syntax, a common
// mistake of developers, which is to confuse and conflate this binding
// rules with lexical scope rules.

// Put another way: why go to the trouble and verbosity of using the this
// style coding paradigm, only to cut it off at the knees by mixing it with
// lexical references. It seems natural to embrace one approach or the
// other for any given piece of code, and not mix them in the same piece
// of code

arrowSolution.cool();

const bindSolution = {
    counter: 3,
    cool: function coolFn() {
        setTimeout(
            function timer() {
                this.counter += 1;
                console.log(this.counter);
            }.bind(this),
            100
        );
    },
};

// Here we dont mix the 'this style code' paradigm with the lexical scoping rules

bindSolution.cool();
