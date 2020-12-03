const yargs = require('yargs/yargs');

module.exports = flow => {

    flow.describe('params', 'pulls command line arguments and stores them in context.params');

    const {argv: {
        $0,
        _: {0: action},
        ...rest
    }} = yargs(process.argv.slice(2));

    flow.context.params = {
        action,
        ...rest
    };
};
