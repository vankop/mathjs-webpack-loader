const path = require('path');

module.exports = {
	mode: "development",
	entry: "./index",
	output: {
		path: __dirname,
		filename: "bundle.js",
		libraryTarget: "umd"
	},
	module: {
		rules: [
			// rules for modules (configure loaders, parser options, etc.)
			{
				test: /\.mathjs?$/,
				include: [
					__dirname
				],
				loader: path.resolve(__dirname, '../dist/index.js')
			}
		]
	}
};
