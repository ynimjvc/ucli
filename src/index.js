const EventEmitter = require('events');
const {version} = require('../package.json');

const app = () => {

    const plugins = new Map();
    const bus = new EventEmitter();
    const context = {
        version: () => version,
        plugins: name => name
            ? [name, plugins.get(name)]
            : Array.from(plugins.entries())
    };

    bus.setMaxListeners(100);

    const wrap = callback => flow => (...args) => callback(flow, ...args);

    const use = (flow, callback) => {
        callback(flow);

        return flow;
    };

    const describe = (flow, name, description) => {
        plugins.set(name, description);

        return flow;
    };

    const on = (flow, name, callback) => {
        bus.on(name, () => callback());

        return flow;
    };

    const dispatch = (flow, name) => {
        process.nextTick(() => bus.emit(name));

        return flow;
    };

    const flow = {
        context
    };

    flow.use = wrap(use)(flow);
    flow.describe = wrap(describe)(flow);
    flow.on = wrap(on)(flow);
    flow.dispatch = wrap(dispatch)(flow);

    return flow;
};

module.exports = app;
