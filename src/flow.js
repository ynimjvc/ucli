const EventEmitter = require('events');
const wrap = require('./wrap');

class Flow {

    constructor() {
        this.command = this.command.bind(this);
        this.use = this.use.bind(this);
    }

    command(name, callback) {
        this[name] = wrap(this, callback).bind(this);

        return this;
    }

    use(callback) {
        callback(this);

        return this;
    }

}

module.exports = Flow;
