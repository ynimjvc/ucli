const Flow = require('./flow');
const use = require('./commands/use');
const describe = require('./commands/describe');
const dispatch = require('./commands/dispatch');

const app = () => new Flow()
    .command('use', use)
    .command('describe', describe)
    .command('dispatch', dispatch);

module.exports = app;
