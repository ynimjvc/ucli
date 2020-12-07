const descriptions = new Map();

module.exports = flow => {
    flow.command('describe', (flow, name, description) => {
        if (description) {
            descriptions.set(name, description)
        } else {
            return descriptions.get(name);
        }
    });

    flow.command('getAllDescriptions', () => {
        return Array.from(descriptions.entries());
    });
};
