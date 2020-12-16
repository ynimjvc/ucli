module.exports = flow => {
    const command = flow.command;
    const hooks = {
        before: [],
        after: []
    };

    command('before', (flow, callback) => {
        hooks.before.push(callback);

        return flow;
    });

    command('after', (flow, callback) => {
        hooks.after.push(callback);

        return flow;
    });

    flow.command = (name, callback) => command(name, (...args) => {
        hooks.before.forEach(hook => hook(name, ...args));
        const result = callback(...args);
        hooks.after.forEach(hook => hook(name, ...args));

        return result;
    });
};
