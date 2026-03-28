import {
	authReducer,
	clearCredentials,
	selectCurrentUser,
	selectIsAuthenticated,
	setCredentials,
} from '@/features/auth/auth.slice'
import type { AuthState } from '@/features/auth/auth.types'

const mockUser = {
	id: 'user-1',
	email: 'test@example.com',
	name: 'Test User',
	avatarUrl: null,
	createdAt: '2024-01-01T00:00:00.000Z',
}

const initialState: AuthState = {
	user: null,
	token: null,
	status: 'idle',
	error: null,
}

describe('authSlice', () => {
	it('returns the initial state', () => {
		expect(authReducer(undefined, { type: '@@INIT' })).toEqual(initialState)
	})

	it('setCredentials stores user and token', () => {
		const state = authReducer(initialState, setCredentials({ user: mockUser, token: 'abc123' }))
		expect(state.user).toEqual(mockUser)
		expect(state.token).toBe('abc123')
		expect(state.status).toBe('succeeded')
		expect(state.error).toBeNull()
	})

	it('clearCredentials resets to initial state', () => {
		const loggedIn: AuthState = {
			user: mockUser,
			token: 'abc123',
			status: 'succeeded',
			error: null,
		}
		const state = authReducer(loggedIn, clearCredentials())
		expect(state).toEqual(initialState)
	})
})

describe('auth selectors', () => {
	const stateWithUser = { auth: { ...initialState, user: mockUser, token: 'tok' } }
	const stateWithout = { auth: initialState }

	it('selectIsAuthenticated returns true when token present', () => {
		expect(selectIsAuthenticated(stateWithUser)).toBe(true)
	})

	it('selectIsAuthenticated returns false when no token', () => {
		expect(selectIsAuthenticated(stateWithout)).toBe(false)
	})

	it('selectCurrentUser returns the user', () => {
		expect(selectCurrentUser(stateWithUser)).toEqual(mockUser)
	})

	it('selectCurrentUser returns null when not authenticated', () => {
		expect(selectCurrentUser(stateWithout)).toBeNull()
	})
})
