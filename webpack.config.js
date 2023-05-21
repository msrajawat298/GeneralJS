const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'general-js-toolkit.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'generalJs', // give the better name if you do not like but if it is set once then we will not change it in the future.
    libraryTarget: 'umd',
  },
};
