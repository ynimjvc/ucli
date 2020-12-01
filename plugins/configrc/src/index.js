const fs = require('fs');
const path = require('path');
const {plugin} = require('modcli');

module.exports = (name = 'modclirc.json') => {
    plugin(
        'configrc',
        ({on}) => {

            on('start', context => {
                const configPath = path.resolve(process.cwd(), name);
                if (fs.existsSync(configPath)) {
                    const raw = fs.readFileSync(configPath, 'utf8');
                    context.config = JSON.parse(raw);
                } else {
                    throw new Error(`can't find ${name}`);
                }
            });

            return 'Pulls configuration from .modclirc file';

        }
    );
};
