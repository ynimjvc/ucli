module.exports = flow => {
    const context = {};

    flow.command('getContext', () => context);
};
