const {plugin} = require('../index');
const params = require('modcli-params');

params();

module.exports = routing => {

    if (!routing || 'object' !== typeof routing) {
        throw new Error('routing object should be provided');
    }

    if (!Object.keys(routing).length) {
        throw new Error('routing object should contain at least 1 route');
    }

    plugin(
        'action-router',
        ({on, dispatch}) => {

            on('start', context => {
                if (!context.plugins('params')) {
                    throw new Error('action-router requires params plugin');
                }

                const {params: {action}} = context;

                if (routing[action]) {
                    dispatch(routing[action]);
                } else if (routing.defaulf) {
                    dispatch(routing.defaulf);
                } else {
                    dispatch(Object.values(routing)[0]);
                }

            });

        }
    );
};
