import colors from './colors'
import commonThemeOptions from './common'

const extended = {
	Header: {
		background: `linear-gradient(${colors.blue.dark}, ${colors.blue.medium})`,
		border: `1px solid ${colors.white.main}`
	}
}

const darkThemeOptions = {
	name: 'dark',
	palette: {
		type: 'dark',
		common: colors.common,
		primary: {
			dark: '#072740',
			main: '#364f6b',
			light: '#637b99',
			contrastText: '#fff'
		},
		secondary: {
			dark: '#009098',
			main: '#3fc1c9',
			light: '#7af4fc',
			contrastText: '#000'
		}
	},
	...commonThemeOptions,
	cfg: extended
}

export default darkThemeOptions
