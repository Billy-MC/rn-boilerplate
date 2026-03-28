const palette = {
	white: '#FFFFFF',
	black: '#0A0A0A',

	gray50: '#F9F9F8',
	gray100: '#F1F0EC',
	gray200: '#E2E1DC',
	gray300: '#C8C7C0',
	gray400: '#9C9B94',
	gray500: '#6E6D67',
	gray600: '#4A4944',
	gray700: '#333330',
	gray800: '#1E1E1B',
	gray900: '#111110',

	blue50: '#EBF4FF',
	blue100: '#C3DFFE',
	blue200: '#85BCFD',
	blue400: '#3B8AF5',
	blue500: '#1A6FE8',
	blue600: '#1458BC',
	blue700: '#0D3E8A',

	green400: '#22C55E',
	green600: '#16A34A',
	red400: '#F87171',
	red600: '#DC2626',
	amber400: '#FBBF24',
	amber600: '#D97706',
} as const

export const theme = {
	colors: {
		bgPrimary: palette.white,
		bgSecondary: palette.gray50,
		bgTertiary: palette.gray100,
		bgInverse: palette.gray900,

		textPrimary: palette.gray900,
		textSecondary: palette.gray500,
		textTertiary: palette.gray400,
		textInverse: palette.white,
		textDisabled: palette.gray300,

		brand: palette.blue500,
		brandHover: palette.blue600,
		brandSubtle: palette.blue50,

		borderLight: palette.gray100,
		borderDefault: palette.gray200,
		borderStrong: palette.gray300,

		success: palette.green400,
		successText: palette.green600,
		error: palette.red400,
		errorText: palette.red600,
		warning: palette.amber400,
		warningText: palette.amber600,

		interactive: palette.blue500,
		interactivePressed: palette.blue600,
		interactiveDisabled: palette.gray200,
	},

	typography: {
		fontFamily: {
			regular: 'System',
			medium: 'System',
			semibold: 'System',
			bold: 'System',
			mono: 'Courier New',
		},
		fontSize: {
			xs: 11,
			sm: 13,
			base: 15,
			md: 17,
			lg: 20,
			xl: 24,
			'2xl': 30,
			'3xl': 36,
		},
		lineHeight: {
			tight: 1.2,
			snug: 1.35,
			normal: 1.5,
			relaxed: 1.7,
		},
		fontWeight: {
			regular: '400' as const,
			medium: '500' as const,
			semibold: '600' as const,
			bold: '700' as const,
		},
	},

	spacing: {
		0: 0,
		1: 4,
		2: 8,
		3: 12,
		4: 16,
		5: 20,
		6: 24,
		8: 32,
		10: 40,
		12: 48,
		16: 64,
	},

	radii: {
		none: 0,
		sm: 4,
		md: 8,
		lg: 12,
		xl: 16,
		'2xl': 24,
		full: 9999,
	},

	shadows: {
		sm: {
			shadowColor: palette.black,
			shadowOffset: { width: 0, height: 1 },
			shadowOpacity: 0.05,
			shadowRadius: 2,
			elevation: 1,
		},
		md: {
			shadowColor: palette.black,
			shadowOffset: { width: 0, height: 4 },
			shadowOpacity: 0.08,
			shadowRadius: 8,
			elevation: 3,
		},
		lg: {
			shadowColor: palette.black,
			shadowOffset: { width: 0, height: 8 },
			shadowOpacity: 0.12,
			shadowRadius: 16,
			elevation: 6,
		},
	},

	animation: {
		duration: {
			fast: 150,
			normal: 250,
			slow: 400,
		},
	},
} as const

export type AppTheme = typeof theme
