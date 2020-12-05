module.exports = bus => (flow, name, ...args) => {
    bus.emit(name, ...args);

    return flow;
};
