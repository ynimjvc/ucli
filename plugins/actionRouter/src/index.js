module.exports = routing => flow => {

    if (!routing || 'object' !== typeof routing) {
        throw new Error('routing object should be provided');
    }

    if (!Object.keys(routing).length) {
        throw new Error('routing object should contain at least 1 route');
    }

    flow.describe('action-router', 'simple router, uses first argument and routing config to emit event when argument is present');

    const action = process.argv[2];

    if (routing[action]) {
        flow.dispatch(routing[action]);
    } else if (routing.defaulf) {
        flow.dispatch(routing.defaulf);
    } else {
        flow.dispatch(Object.values(routing)[0]);
    }
};
