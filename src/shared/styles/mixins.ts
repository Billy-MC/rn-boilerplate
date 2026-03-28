import type { DefaultTheme } from 'styled-components/native'
import { css } from 'styled-components/native'

// ─── Row / Stack helpers ──────────────────────────────────────────────────────

export const row = css`
	flex-direction: row;
	align-items: center;
`

export const rowBetween = css`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const centered = css`
	align-items: center;
	justify-content: center;
`

export const fill = css`
	flex: 1;
`

// ─── Shadow helper ────────────────────────────────────────────────────────────

type ShadowSize = keyof DefaultTheme['shadows']

export const shadow = (size: ShadowSize = 'md') => css`
	${({ theme }) => {
		const s = theme.shadows[size]
		return `
        shadow-color: ${s.shadowColor};
        shadow-offset: ${s.shadowOffset.width}px ${s.shadowOffset.height}px;
        shadow-opacity: ${s.shadowOpacity};
        shadow-radius: ${s.shadowRadius}px;
        elevation: ${s.elevation};
      `
	}}
`

// ─── Typography helpers ───────────────────────────────────────────────────────

export const textEllipsis = css`
	number-of-lines: 1;
`

// ─── Spacing helpers ──────────────────────────────────────────────────────────

type SpacingKey = keyof DefaultTheme['spacing']

export const paddingH = (size: SpacingKey) => css`
	padding-left: ${({ theme }) => theme.spacing[size]}px;
	padding-right: ${({ theme }) => theme.spacing[size]}px;
`

export const paddingV = (size: SpacingKey) => css`
	padding-top: ${({ theme }) => theme.spacing[size]}px;
	padding-bottom: ${({ theme }) => theme.spacing[size]}px;
`

// ─── Border helpers ───────────────────────────────────────────────────────────

export const cardBase = css`
	background-color: ${({ theme }) => theme.colors.bgPrimary};
	border-radius: ${({ theme }) => theme.radii.lg}px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.borderLight};
`
