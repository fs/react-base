import config from '../gulp';
import path from 'path';
import glob from 'glob';
import webpack from 'webpack';

function getEntryPoints(globPattern) {
    var testFiles = glob.sync(globPattern);
    var entryPoints = {};
    testFiles.forEach(function(file) {
        entryPoints[file.replace(/\.js$/, '')] = './' + file;
    });
    return entryPoints;
}

let entryPoints = getEntryPoints('app/**/__tests__/*');
entryPoints.setup = './setup';

module.exports = {
    debug: true,
    target: 'web',
    entry: entryPoints,
    output: {
        path: '__bundled_tests__',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'setup',
        filename: 'common.js',
        minChunks: 2
    })
    ]
};
