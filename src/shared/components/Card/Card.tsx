import { cardBase, shadow } from '@/shared/styles/mixins'
import React from 'react'
import type { ViewProps } from 'react-native'
import styled from 'styled-components/native'

export interface CardProps extends ViewProps {
	children: React.ReactNode
	elevated?: boolean
	padding?: 'none' | 'sm' | 'md' | 'lg'
}

interface ContainerProps {
	$elevated: boolean
	$padding: NonNullable<CardProps['padding']>
}

const Container = styled.View<ContainerProps>`
	${cardBase}
	${({ $elevated }) => ($elevated ? shadow('md') : '')}

  ${({ theme, $padding }) => {
		switch ($padding) {
			case 'none':
				return 'padding: 0px;'
			case 'sm':
				return `padding: ${theme.spacing[3]}px;`
			case 'lg':
				return `padding: ${theme.spacing[6]}px;`
			default:
				return `padding: ${theme.spacing[4]}px;`
		}
	}}
`

export const Card = ({ children, elevated = false, padding = 'md', ...rest }: CardProps) => (
	<Container $elevated={elevated} $padding={padding} {...rest}>
		{children}
	</Container>
)
