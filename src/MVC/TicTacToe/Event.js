class Event {
    constructor() {
        this.listeners = [];
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    trigger(params) {
        this.listeners.forEach((listener) => {
            listener(params); // we execute all registered functions, for this current event
        });
    }
}

export default Event;
