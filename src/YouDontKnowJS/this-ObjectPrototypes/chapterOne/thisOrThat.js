// This code snippet allows the identify() and speak() functions to be
// reused against multiple context objects (me and you), rather than need‐
// ing a separate version of the function for each object

function usingThis() {
    function identify() {
        return this.name.toUpperCase();
    }

    function speak() {
        const greeting = `Hello, I'm ${identify.call(this)}`;
        console.log(greeting);
    }

    const me = {
        name: "Svetlin"
    };

    const ivan = {
        name: "Ivan"
    };

    identify.call(me);
    identify.call(ivan);

    speak.call(me);
    speak.call(ivan);
}

usingThis();

// This can be easily replace with just passing a context to those function

function usingContext() {
    function identify(context) {
        return context.name.toUpperCase();
    }

    function speak(context) {
        const greeting = `Hello, I'm ${identify(context)}`;
        console.log(greeting);
    }

    const me = {
        name: "Svetlin"
    };

    const ivan = {
        name: "Ivvan"
    };

    identify(me);
    identify(ivan);

    speak(me);
    speak(ivan);
}

// However, the this mechanism provides a more elegant way of im‐
// plicitly “passing along” an object reference, leading to cleaner API
// design and easier reuse
usingContext();

// The more complex your usage patter in, the more clearly you will see
// that passing context around as an explicit parameter is often messier
// than passing around a 'this' context. When we explore objects and
// prototypes, we will see the helpfulness of a collection of functions
// being able to automatically reference the proper context object
