import { AppBar, Button, Toolbar } from '@material-ui/core'
import { Link } from '@reach/router'
import * as React from 'react'

import DarkThemeIcon from '../../assets/icons/darkThemeIcon'
import LightThemeIcon from '../../assets/icons/lightThemeIcon'
import { useAppHeaderStyles } from './style'

declare interface IAppHeaderProps {
	onToggleThemeMode: () => void
}

const AppHeader = (props: IAppHeaderProps) => {
	const classes = useAppHeaderStyles()

	return (
		<AppBar position={'static'} elevation={0}>
			<Toolbar className={classes.toolbar}>
				<Link to='/' className={classes.title}>
					Code Generator
				</Link>
				<Button
					className={classes.themeToggleButton}
					onClick={props.onToggleThemeMode}
				>
					<DarkThemeIcon />
					<LightThemeIcon />
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default AppHeader
