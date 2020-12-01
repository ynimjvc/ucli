const yargs = require('yargs/yargs');
const {plugin} = require('modcli');

const {argv: {
    $0,
    _: {0: action},
    ...rest
}} = yargs(process.argv.slice(2));

module.exports = () => plugin(
    'params',
    ({on}) => {

        on('start', context => {
            context.params = {
                action,
                ...rest
            };
        });

    }
);
