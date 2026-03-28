import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { HomeState } from './home.types'

const initialState: HomeState = {
	selectedPostId: null,
}

const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		selectPost: (state, action: PayloadAction<string>) => {
			state.selectedPostId = action.payload
		},
		clearSelectedPost: (state) => {
			state.selectedPostId = null
		},
	},
})

export const { selectPost, clearSelectedPost } = homeSlice.actions
export const homeReducer = homeSlice.reducer

export const selectSelectedPostId = (state: { home: HomeState }) => state.home.selectedPostId
