import { Container, createMuiTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'

import Header from '../../components/Header'
import darkThemeOptions from '../../themes/dark'
import lightThemeOptions from '../../themes/light'
import { IThemeOptions } from '../../themes/types'
import { useLocalStorageState } from '../../utils/useLocalStorageState'

const Layout: React.FC = (props) => {
	const [isLightTheme, setThemeMode] = useLocalStorageState(
		'isLightTheme',
		false
	)

	const themeOptions = isLightTheme ? lightThemeOptions : darkThemeOptions
	const theme = createMuiTheme(themeOptions as IThemeOptions)

	const toggleThemeMode = () => {
		setThemeMode(!isLightTheme)
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header onToggleThemeMode={toggleThemeMode} />
				<Container>{props.children as React.ReactChild}</Container>
				{/*<Footer />*/}
			</ThemeProvider>
		</>
	)
}

export default Layout
