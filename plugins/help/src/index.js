const {plugin} = require('modcli');

module.exports = () => plugin(
    'help',
    ({on}) => {

        on('help', context => {

            const plugins = context.plugins();
            const firstColumnLength = plugins.reduce((result, [name]) => (name.length > result) ? name.length : result, 0);

            const content = plugins
                .map(([name, description]) => {


                    const descriptionLines = (description || '').split('\n');

                    return descriptionLines
                        .map((line, index) => index
                            ? `${' '.repeat(firstColumnLength)}\t\t${line}`
                            : `${name.padEnd(firstColumnLength, ' ')}\t\t${line}`)
                        .join('\n');
                })
                .join('\n');

            process.stdout.write(content);

        });

    }
);
