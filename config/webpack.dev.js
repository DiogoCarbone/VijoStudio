const webpack = require('webpack');
const { merge } = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	/**
	 * Mode
	 *
	 * Set the mode to development or production.
	 */
	mode: 'development',

	/**
	 * Devtool
	 *
	 * Control how source maps are generated.
	 */
	devtool: 'eval-cheap-module-source-map',

	/**
	 * DevServer
	 *
	 * Spin up a server for quick development.
	 */
	devServer: {
		historyApiFallback: true,
		contentBase: paths.build,
		open: true,
		compress: true,
		inline: true,
		hot: true,
		host: '192.168.0.22',
		port: 8080,
	},

	plugins: [
		/**
		 * HotModuleReplacementPlugin
		 *
		 * Only update what has changed.
		 */
		new webpack.HotModuleReplacementPlugin(),
	],
});
