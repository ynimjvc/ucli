const EventEmitter = require('events');
const {version} = require('../package.json');

const bus = new EventEmitter();
bus.setMaxListeners(100);

const plugins = new Map();

const context = {
    version: () => version(),
    plugins: name => name
        ? [name, plugins.get(name)]
        : Array.from(plugins.entries())
};

const on = (name, callback) => bus.on(name, () => callback(context));
const dispatch = name => bus.emit(name);
const plugin = (name, callback) => {
    if (plugins.has(name)) {
        throw new Error(`plugin ${name} allready registred`);
    } else {
        plugins.set(name, callback({on, dispatch}));
    }
};
const app = () => process.nextTick(() => dispatch('start'));

module.exports.plugin = plugin;
module.exports.app = app;
