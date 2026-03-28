const path = require('path')

module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			['babel-plugin-styled-components', { displayName: true, fileName: true }],
			[
				'module-resolver',
				{
					alias: {
						'@': path.resolve(__dirname, 'src'),
					},
				},
			],
		],
	}
}
