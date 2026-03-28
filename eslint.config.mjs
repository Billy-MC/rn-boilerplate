import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	// ─── Global ignores ─────────────────────────────────────────────────────────
	{
		ignores: ['node_modules/**', 'android/**', 'ios/**', '.expo/**', 'dist/**', 'build/**'],
	},

	// ─── Base JS recommended ────────────────────────────────────────────────────
	js.configs.recommended,

	// ─── TypeScript ─────────────────────────────────────────────────────────────
	...tseslint.configs.recommended,

	// ─── Main config (all .ts / .tsx files) ─────────────────────────────────────
	{
		files: ['**/*.{ts,tsx}'],

		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			import: importPlugin,
		},

		settings: {
			react: { version: 'detect' },
		},

		rules: {
			// ── TypeScript ────────────────────────────────────────────────────────
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
			'@typescript-eslint/no-non-null-assertion': 'error',

			// ── React ─────────────────────────────────────────────────────────────
			'react/react-in-jsx-scope': 'off', // RN 0.72+ not needed
			'react/prop-types': 'off', // using TypeScript instead
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			// ── Style preferences ─────────────────────────────────────────────────
			'prefer-const': 'error',
			'no-var': 'error',
			'no-console': ['warn', { allow: ['warn', 'error'] }],

			// ── Feature boundary enforcement ──────────────────────────────────────
			// Features cannot import from each other — only from shared/ or their own folder
			'import/no-restricted-paths': [
				'error',
				{
					zones: [
						{
							target: './src/features/auth',
							from: './src/features',
							except: ['./auth'],
							message: '[Boundary] features/auth cannot import from other features. Move shared code to src/shared/',
						},
						{
							target: './src/features/home',
							from: './src/features',
							except: ['./home'],
							message: '[Boundary] features/home cannot import from other features. Move shared code to src/shared/',
						},
						// Add a zone for each new feature:
						// {
						//   target: './src/features/<name>',
						//   from: './src/features',
						//   except: ['./<name>'],
						//   message: '[Boundary] features/<name> cannot import from other features.',
						// },
					],
				},
			],
		},
	},

	// ─── Test files — relaxed rules ─────────────────────────────────────────────
	{
		files: ['**/__tests__/**/*.{ts,tsx}', '**/*.test.{ts,tsx}'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'no-console': 'off',
		},
	},
	// ─── Config for config files (babel.config.js, jest.config.js) ─────────────────────────
	{
		files: ['babel.config.js', 'jest.config.js'],
		languageOptions: {
			sourceType: 'commonjs',
			globals: {
				module: 'writable',
				require: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				process: 'readonly',
			},
		},
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
	prettierConfig,
)
