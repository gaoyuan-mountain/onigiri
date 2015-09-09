var path = require('path');
var webpack = require('webpack');

module.exports = {
	cache: true,
	context: __dirname,
	entry: {
		app: './app/app.js'
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: 'node_modules',
			loader: 'babel'
		}, {
			test: /\.css$/,
			exclude: 'node_modules',
			loader: 'style!css'
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			mangle: false
		})
	]
}
