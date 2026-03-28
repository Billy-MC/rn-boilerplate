import React, { forwardRef } from 'react'
import type { TextInput, TextInputProps } from 'react-native'
import styled from 'styled-components/native'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface InputProps extends TextInputProps {
	label?: string
	error?: string
	hint?: string
}

// ─── Styled ───────────────────────────────────────────────────────────────────

const Wrapper = styled.View`
	gap: ${({ theme }) => theme.spacing[1]}px;
`

const Label = styled.Text`
	font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
	font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
	color: ${({ theme }) => theme.colors.textPrimary};
`

interface StyledInputProps {
	$hasError: boolean
}

const StyledInput = styled.TextInput<StyledInputProps>`
	height: 48px;
	padding-horizontal: ${({ theme }) => theme.spacing[4]}px;
	border-radius: ${({ theme }) => theme.radii.md}px;
	border-width: 1.5px;
	font-size: ${({ theme }) => theme.typography.fontSize.base}px;
	background-color: ${({ theme }) => theme.colors.bgSecondary};
	color: ${({ theme }) => theme.colors.textPrimary};
	border-color: ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.borderDefault)};
`

const HintText = styled.Text`
	font-size: ${({ theme }) => theme.typography.fontSize.xs}px;
	color: ${({ theme }) => theme.colors.textTertiary};
`

const ErrorText = styled.Text`
	font-size: ${({ theme }) => theme.typography.fontSize.xs}px;
	color: ${({ theme }) => theme.colors.errorText};
`

// ─── Component ───────────────────────────────────────────────────────────────

export const Input = forwardRef<TextInput, InputProps>(({ label, error, hint, ...rest }, ref) => (
	<Wrapper>
		{label ? <Label>{label}</Label> : null}
		<StyledInput ref={ref} $hasError={!!error} placeholderTextColor="#9C9B94" {...rest} />
		{error ? <ErrorText>{error}</ErrorText> : null}
		{!error && hint ? <HintText>{hint}</HintText> : null}
	</Wrapper>
))

Input.displayName = 'Input'
