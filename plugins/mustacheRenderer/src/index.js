const fs = require('fs');
const path = require('path');
const mustache = require('mustache');


const defaultConfig = {
    customTags: ['<%', '%>']
};

module.exports = (config = defaultConfig) => flow => {

    flow.describe('mustache-renderer', 'Renders from mustache template and provided data');

    flow.on('mustache-renderer:render', ({
        file: filePath,
        template: templatePath,
        data = {},
        options: {
            partials: partialPaths,
            customTags
        } = {}
    }) => {

        const partials = partialPaths
            ? Object.entries(partialPaths)
                .reduce((result, [name, partialPath]) => {
                    result[name] = fs.readFileSync(path.resolve(process.cwd(), partialPath), 'utf8');

                    return result;
                }, {})
            : void 0;

        const template = fs.readFileSync(path.resolve(process.cwd(), templatePath), 'utf8');
        const rendered = mustache.render(template, data, partials, customTags);
        fs.writeFileSync(path.resolve(process.cwd(), filePath), rendered);
    });

    mustache.tags = config.customTags;
};
