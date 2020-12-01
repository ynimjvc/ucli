const {plugin} = require('modcli');

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
                const action = process.argv[2];

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
