module.exports = bus => (flow, name) => {
    process.nextTick(() => bus.emit(name));

    return flow;
};
