import { row } from '@/shared/styles/mixins'
import React from 'react'
import type { TouchableOpacityProps } from 'react-native'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

// ─── Types ────────────────────────────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends TouchableOpacityProps {
	label: string
	variant?: ButtonVariant
	size?: ButtonSize
	loading?: boolean
	fullWidth?: boolean
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
}

// ─── Styled ───────────────────────────────────────────────────────────────────

interface ContainerProps {
	$variant: ButtonVariant
	$size: ButtonSize
	$fullWidth: boolean
	$disabled: boolean
}

const Container = styled(TouchableOpacity)<ContainerProps>`
	${row}
	justify-content: center;
	align-self: ${({ $fullWidth }) => ($fullWidth ? 'stretch' : 'flex-start')};
	border-radius: ${({ theme }) => theme.radii.md}px;
	gap: ${({ theme }) => theme.spacing[2]}px;

	${({ theme, $size }) => {
		const s = theme.spacing
		switch ($size) {
			case 'sm':
				return `padding: ${s[2]}px ${s[3]}px;`
			case 'lg':
				return `padding: ${s[4]}px ${s[6]}px;`
			default:
				return `padding: ${s[3]}px ${s[4]}px;`
		}
	}}

	${({ theme, $variant, $disabled }) => {
		if ($disabled) {
			return `
        background-color: ${theme.colors.interactiveDisabled};
        border-width: 0px;
      `
		}
		switch ($variant) {
			case 'secondary':
				return `
          background-color: ${theme.colors.bgPrimary};
          border-width: 1.5px;
          border-color: ${theme.colors.borderDefault};
        `
			case 'ghost':
				return `
          background-color: transparent;
          border-width: 0px;
        `
			case 'danger':
				return `
          background-color: ${theme.colors.error};
          border-width: 0px;
        `
			default:
				return `
          background-color: ${theme.colors.brand};
          border-width: 0px;
        `
		}
	}}
`

interface LabelProps {
	$variant: ButtonVariant
	$size: ButtonSize
	$disabled: boolean
}

const Label = styled.Text<LabelProps>`
	font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

	${({ theme, $size }) => {
		switch ($size) {
			case 'sm':
				return `font-size: ${theme.typography.fontSize.sm}px;`
			case 'lg':
				return `font-size: ${theme.typography.fontSize.md}px;`
			default:
				return `font-size: ${theme.typography.fontSize.base}px;`
		}
	}}

	${({ theme, $variant, $disabled }) => {
		if ($disabled) return `color: ${theme.colors.textTertiary};`
		switch ($variant) {
			case 'secondary':
				return `color: ${theme.colors.textPrimary};`
			case 'ghost':
				return `color: ${theme.colors.brand};`
			default:
				return `color: ${theme.colors.textInverse};`
		}
	}}
`

// ─── Component ───────────────────────────────────────────────────────────────

export const Button = ({
	label,
	variant = 'primary',
	size = 'md',
	loading = false,
	fullWidth = false,
	leftIcon,
	rightIcon,
	disabled,
	...rest
}: ButtonProps) => {
	const theme = useTheme()
	const isDisabled = disabled ?? loading

	const spinnerColor = variant === 'primary' || variant === 'danger' ? theme.colors.textInverse : theme.colors.brand

	return (
		<Container
			$variant={variant}
			$size={size}
			$fullWidth={fullWidth}
			$disabled={isDisabled}
			disabled={isDisabled}
			activeOpacity={0.75}
			{...rest}
		>
			{loading ? (
				<ActivityIndicator size="small" color={spinnerColor} />
			) : (
				<>
					{leftIcon}
					<Label $variant={variant} $size={size} $disabled={isDisabled}>
						{label}
					</Label>
					{rightIcon}
				</>
			)}
		</Container>
	)
}
