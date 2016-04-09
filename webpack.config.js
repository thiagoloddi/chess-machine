var path = require('path');

var config = {
	context: path.join(__dirname, "src"),
	entry: "./index.js",

	output: {
		filename: "bundle.js",
		path: __dirname,
		publicPath: "/public/"
	},

	module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] } },

      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'css') },

      { test: /\.css$/,
        loader: 'style!css' }
    ]
  }
};
module.exports = config;