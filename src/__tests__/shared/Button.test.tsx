import { Button } from '@/shared/components'
import { fireEvent } from '@testing-library/react-native'
import React from 'react'
import { renderWithProviders } from '../utils/renderWithProviders'

describe('Button', () => {
	it('renders the label', () => {
		const { getByText } = renderWithProviders(<Button label="Sign in" />)
		expect(getByText('Sign in')).toBeTruthy()
	})

	it('calls onPress when tapped', () => {
		const onPress = jest.fn()
		const { getByText } = renderWithProviders(<Button label="Sign in" onPress={onPress} />)
		fireEvent.press(getByText('Sign in'))
		expect(onPress).toHaveBeenCalledTimes(1)
	})

	it('does not call onPress when disabled', () => {
		const onPress = jest.fn()
		const { getByText } = renderWithProviders(<Button label="Sign in" onPress={onPress} disabled />)
		fireEvent.press(getByText('Sign in'))
		expect(onPress).not.toHaveBeenCalled()
	})

	it('shows ActivityIndicator when loading', () => {
		const { queryByText, getByTestId } = renderWithProviders(<Button label="Sign in" loading testID="btn" />)
		// Label should not be visible while loading
		expect(queryByText('Sign in')).toBeNull()
		expect(getByTestId('btn')).toBeTruthy()
	})

	it('renders secondary variant without crashing', () => {
		const { getByText } = renderWithProviders(<Button label="Cancel" variant="secondary" />)
		expect(getByText('Cancel')).toBeTruthy()
	})
})
