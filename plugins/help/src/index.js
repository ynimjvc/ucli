module.exports = flow => {

    flow.describe('help', 'prints formatted descriptions of all registered plugins');

    flow.on('help', context => {

        const firstColumnLength = flow.plugins
            .reduce((result, [name]) => (name.length > result) ? name.length : result, 0);

        const content = flow.plugins
            .map(([name, description]) => {


                const descriptionLines = (description || '').split('\n');

                return descriptionLines
                    .map((line, index) => index
                        ? `${' '.repeat(firstColumnLength)}\t\t${line}`
                        : `${name.padEnd(firstColumnLength, ' ')}\t\t${line}`)
                    .join('\n');
            })
            .join('\n\n');

        process.stdout.write('\033c');
        process.stdout.write(content);

    });

};
