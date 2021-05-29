import colors from './colors'
import commonThemeOptions from './common'

const extended = {
	Header: {
		background: `linear-gradient(to top, ${colors.white.medium} 0%, ${colors.white.light} 100%)`,
		border: `1px solid ${colors.blue.light}`
	}
}

const lightThemeOptions = {
	name: 'light',
	palette: {
		type: 'light',
		common: colors.common,
		primary: {
			dark: '#c40759',
			main: '#fc5185',
			light: '#ff86b4',
			contrastText: '#000'
		},
		secondary: {
			dark: '#009098',
			main: '#3fc1c9',
			light: '#7af4fc',
			contrastText: '#000'
		},
		background: {
			default: '#f0f5f9'
		}
	},
	...commonThemeOptions,
	cfg: extended
}

export default lightThemeOptions
