import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SliceState = {
	isLoading: boolean
	message: string
}

const initialState: SliceState = { isLoading: false, message: '' }

const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		showLoader: (state, action: PayloadAction<string>) => {
			state.isLoading = true
			state.message = action.payload || ''
		},
		hideLoader: (state) => {
			state.isLoading = false
			state.message = ''
		}
	}
})

export const { showLoader, hideLoader } = commonSlice.actions
export default commonSlice.reducer
