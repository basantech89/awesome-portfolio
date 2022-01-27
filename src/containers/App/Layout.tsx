import { Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'

import Header from '../../components/Header'

const Layout: React.FC = (props) => {
	const toggleThemeMode = () => {
		console.log('hh')
	}

	return (
		<>
			<CssBaseline />
			<Header onToggleThemeMode={toggleThemeMode} />
			<Container>{props.children as React.ReactChild}</Container>
			{/*<Footer />*/}
		</>
	)
}

export default Layout
