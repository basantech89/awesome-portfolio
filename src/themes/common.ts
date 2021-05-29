import { IThemeOptions } from './types'

const commonThemeOptions: Partial<IThemeOptions> = {
	typography: {
		fontFamily: [
			'Poppins',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(',')
	},
	overrides: {
		MuiButton: {
			root: {
				textTransform: 'none'
			}
		}
	}
}

export default commonThemeOptions
