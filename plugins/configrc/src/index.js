const fs = require('fs');
const path = require('path');

module.exports = (name = 'modclirc.json') => flow => {

    flow.describe('configrc', 'pulls configuration from .modclirc file and stores it to context.config');

    const configPath = path.resolve(process.cwd(), name);
    if (fs.existsSync(configPath)) {
        const raw = fs.readFileSync(configPath, 'utf8');
        flow.context.config = JSON.parse(raw);
    } else {
        throw new Error(`can't find ${name}`);
    }
    
};
