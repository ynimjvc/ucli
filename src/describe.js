module.exports = plugins => (flow, name, description) => {
    plugins.set(name, description);

    return flow;
};
