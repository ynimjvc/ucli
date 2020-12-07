const EventEmitter = require('events');
const {version} = require('../package.json');
const wrap = require('./wrap');


const BUS = Symbol();
const PLUGINS = Symbol();
const CONTEXT = Symbol();

class Flow {
    constructor() {
        this[BUS] = new EventEmitter();
        this[PLUGINS] = new Map();
        this[CONTEXT] = {};

        this.plugin = this.plugin.bind(this);
        this.command = this.command.bind(this);
        this.emit = this.emit.bind(this);
        this.on = this.on.bind(this);
    }

    get version() {
        return version;
    }

    plugin(name, description) {
        if (description) {
            this[PLUGINS].set(name, description);
        }

        return this[PLUGINS].get(name);
    }

    get plugins() {
        return Array.from(this[PLUGINS].entries());
    }

    get context() {
        return this[CONTEXT];
    }

    command(name, callback) {
        this[name] = wrap(this, callback).bind(this);

        return this;
    }

    on(name, callback) {
        this[BUS].on(name, callback);

        return this;
    }

    emit(name, ...args) {
        this[BUS].emit(name, ...args);

        return this;
    }

}

module.exports = Flow;
