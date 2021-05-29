import { createStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ITheme } from '../../themes/types'

export const useAppHeaderStyles = makeStyles(
	(theme: ITheme) =>
		createStyles({
			toolbar: {
				justifyContent: 'space-between'
			},
			title: {
				letterSpacing: 0.7,
				flexGrow: 1,
				color: '#fff',
				textDecoration: 'none',
				[theme.breakpoints.up('sm')]: {
					display: 'block'
				}
			},
			themeToggleButton: {
				background: theme.cfg.Header.background,
				border: theme.cfg.Header.border,
				borderRadius: 30,
				width: '4%',
				padding: '5px 10px',
				display: 'inline-flex',
				justifyContent: 'space-between',
				overflow: 'hidden',
				'& svg': {
					height: 22,
					width: 22,
					transition: 'all 0.3s linear'
				},
				'& svg:first-child': {
					transform:
						theme.name === 'light' ? 'translateX(100px)' : 'translateX(0px)'
				},
				'& svg:nth-child(2)': {
					transform:
						theme.name === 'light' ? 'translateX(0)' : 'translateX(-100px)'
				}
			}
		}),
	{
		name: 'Header'
	}
)
