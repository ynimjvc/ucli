const EventEmitter = require('events');

const events = new EventEmitter();

module.exports = flow => {

    flow.command('dispatch', (flow, name, ...args) => {
        events.emit(name, ...args);

        return flow;
    })
    
    flow.command('on', (flow, name, callback) => {
        events.on(name, callback);

        return flow;
    });

};
