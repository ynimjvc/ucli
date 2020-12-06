module.exports = flow => {

    flow.description('forever', 'Keeps process running unit closed buy \'close\' event or process terminated');

    const id = setInterval(() => {}, 1 << 30);

    flow.on('close', () => {
        clearInterval(id);
    });

};
