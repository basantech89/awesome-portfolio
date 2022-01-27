import { AwesomeThemeProvider } from 'awesome-ui'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'

import ErrorFallback from '../../components/ErrorFallback'
import store from '../../store'
import Layout from './Layout'
import Routes from './Routes'

const App: React.FC = () => {
	return (
		<AwesomeThemeProvider>
			<Provider store={store}>
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<Layout>
						<Routes />
					</Layout>
				</ErrorBoundary>
			</Provider>
		</AwesomeThemeProvider>
	)
}

export default App
