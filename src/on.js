module.exports = bus => (flow, name, callback) => {
    bus.on(name, callback);

    return flow;
};
