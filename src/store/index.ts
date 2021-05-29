import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import rootReducer from './state'

const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store
