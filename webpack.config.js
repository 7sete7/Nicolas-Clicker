const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
				exclude: /node_modules/,
			},
			{
				test: /\.hbs$/,
				use: 'raw-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.hbs'],
		fallback: {
			fs: false,
		},
		alias: {
			handlebars: 'handlebars/dist/cjs/handlebars.js',
		},
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		port: 3000,
		static: ['public'],
		client: {
			progress: true,
			overlay: true,
		},
	},
	plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
