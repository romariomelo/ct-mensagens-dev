const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: 'C:\\ProjetosWeb\\colegiotimbaubense\\professor\\node_modules\\ct-mensagem\\dist' //path.resolve(__dirname, 'dist')
    }
};