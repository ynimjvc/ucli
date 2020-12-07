module.exports = (flow, callback) => (...args) => {
    callback(flow, ...args)

    return flow;
};
