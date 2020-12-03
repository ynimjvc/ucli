const EventEmitter = require('events');
const {version} = require('../package.json');
const wrap = require('./wrap');
const use = require('./use');
const describe = require('./describe');
const on = require('./on');
const dispatch = require('./dispatch');

const BUS = Symbol();
const PLUGINS = Symbol();
const CONTEXT = Symbol();

class Flow {
    constructor() {
        this[BUS] = new EventEmitter();
        this[PLUGINS] = new Map();
        this[CONTEXT] = {};

        this.getDescription = this.getDescription.bind(this);

        this.use = wrap(use)(this).bind(this);
        this.describe = wrap(describe(this[PLUGINS]))(this).bind(this);
        this.on = wrap(on(this[BUS]))(this).bind(this);
        this.dispatch = wrap(dispatch(this[BUS]))(this).bind(this);
    }

    get version() {
        return version;
    }

    get plugins() {
        return Array.from(this[PLUGINS].entries());
    }

    get context() {
        return this[CONTEXT];
    }

    getDescription(name) {
        return this[PLUGINS].get(name);
    }
}

module.exports = Flow;
