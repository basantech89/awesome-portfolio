import React from 'react'
import { FallbackProps } from 'react-error-boundary'

import { useErrorFallbackStyles } from './style'

const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
	const classes = useErrorFallbackStyles()

	if (error) {
		return (
			<div>
				There was an error:{' '}
				<pre className={classes.errorMess}> {error.message}</pre>
			</div>
		)
	}

	return null
}

export default ErrorFallback
