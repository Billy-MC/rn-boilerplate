import styled from 'styled-components/native'

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'bodySmall' | 'caption' | 'label' | 'mono'

interface TextProps {
	$variant?: TextVariant
	$color?: string
	$align?: 'left' | 'center' | 'right'
	$bold?: boolean
}

export const Text = styled.Text<TextProps>`
	color: ${({ theme, $color }) => $color ?? theme.colors.textPrimary};
	text-align: ${({ $align }) => $align ?? 'left'};

	${({ theme, $variant = 'body', $bold }) => {
		const fw = $bold ? theme.typography.fontWeight.bold : undefined

		switch ($variant) {
			case 'h1':
				return `
          font-size: ${theme.typography.fontSize['3xl']}px;
          font-weight: ${fw ?? theme.typography.fontWeight.bold};
          line-height: ${theme.typography.fontSize['3xl'] * theme.typography.lineHeight.tight}px;
        `
			case 'h2':
				return `
          font-size: ${theme.typography.fontSize['2xl']}px;
          font-weight: ${fw ?? theme.typography.fontWeight.bold};
          line-height: ${theme.typography.fontSize['2xl'] * theme.typography.lineHeight.tight}px;
        `
			case 'h3':
				return `
          font-size: ${theme.typography.fontSize.xl}px;
          font-weight: ${fw ?? theme.typography.fontWeight.semibold};
          line-height: ${theme.typography.fontSize.xl * theme.typography.lineHeight.snug}px;
        `
			case 'bodySmall':
				return `
          font-size: ${theme.typography.fontSize.sm}px;
          font-weight: ${fw ?? theme.typography.fontWeight.regular};
          line-height: ${theme.typography.fontSize.sm * theme.typography.lineHeight.normal}px;
        `
			case 'caption':
				return `
          font-size: ${theme.typography.fontSize.xs}px;
          font-weight: ${fw ?? theme.typography.fontWeight.regular};
          color: ${theme.colors.textSecondary};
          line-height: ${theme.typography.fontSize.xs * theme.typography.lineHeight.normal}px;
        `
			case 'label':
				return `
          font-size: ${theme.typography.fontSize.sm}px;
          font-weight: ${fw ?? theme.typography.fontWeight.medium};
          line-height: ${theme.typography.fontSize.sm * theme.typography.lineHeight.normal}px;
        `
			case 'mono':
				return `
          font-size: ${theme.typography.fontSize.sm}px;
          font-family: ${theme.typography.fontFamily.mono};
          line-height: ${theme.typography.fontSize.sm * theme.typography.lineHeight.relaxed}px;
        `
			default:
				return `
          font-size: ${theme.typography.fontSize.base}px;
          font-weight: ${fw ?? theme.typography.fontWeight.regular};
          line-height: ${theme.typography.fontSize.base * theme.typography.lineHeight.normal}px;
        `
		}
	}}
`
