import * as React from 'react'

type TReducerState = {
	status: string
	data: any | null
	error: Error | null
}

type TReducerAction = {
	type: string
	data: any | null
	error: Error | null
}

function useSafeDispatch(dispatch: any) {
	const mounted = React.useRef(false)

	React.useLayoutEffect(() => {
		mounted.current = true
		return () => {
			mounted.current = false
		}
	}, [])

	return React.useCallback(
		(...args) => (mounted.current ? dispatch(...args) : void 0),
		[dispatch]
	)
}

const asyncReducer = function (state: TReducerState, action: TReducerAction) {
	switch (action.type) {
		case 'pending': {
			return { status: 'pending', data: null, error: null }
		}
		case 'resolved': {
			return { status: 'resolved', data: action.data, error: null }
		}
		case 'rejected': {
			return { status: 'rejected', data: null, error: action.error }
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

function useAsync(initialState: any) {
	const [state, unsafeDispatch] = React.useReducer(asyncReducer, {
		status: 'idle',
		data: null,
		error: null,
		...initialState
	})

	const dispatch = useSafeDispatch(unsafeDispatch)

	const { data, error, status } = state

	const run = React.useCallback(
		(promise) => {
			dispatch({ type: 'pending' })
			promise.then(
				(data: any) => {
					dispatch({ type: 'resolved', data })
				},
				(error: Error) => {
					dispatch({ type: 'rejected', error })
				}
			)
		},
		[dispatch]
	)

	const setData = React.useCallback(
		(data) => dispatch({ type: 'resolved', data }),
		[dispatch]
	)
	const setError = React.useCallback(
		(error) => dispatch({ type: 'rejected', error }),
		[dispatch]
	)

	return {
		setData,
		setError,
		error,
		status,
		data,
		run
	}
}

export default useAsync
export { useSafeDispatch }
