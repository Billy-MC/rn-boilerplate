module.exports = {
	preset: 'react-native',
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	setupFilesAfterFramework: ['@testing-library/react-native/extend-expect'],
	moduleNameMapper: {
		'^@features/(.*)$': '<rootDir>/src/features/$1',
		'^@shared/(.*)$': '<rootDir>/src/shared/$1',
		'^@store/(.*)$': '<rootDir>/src/store/$1',
		'^@navigation/(.*)$': '<rootDir>/src/navigation/$1',
		'^@types/(.*)$': '<rootDir>/src/types/$1',
	},
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/*.styles.ts',
		'!src/**/*.types.ts',
		'!src/**/index.ts',
		'!src/**/__tests__/**',
	],
	coverageThreshold: {
		global: {
			branches: 70,
			functions: 70,
			lines: 70,
		},
	},
}
