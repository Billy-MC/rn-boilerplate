import React from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components/native'
import { theme } from './theme'

interface Props {
	children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
