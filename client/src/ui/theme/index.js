import { createMuiTheme } from '@material-ui/core/styles'

const themeName = 'Dart 180'
const palette = {
  common: {
    black: '#000',
    white: '#fff'
  },
  background: {
    paper: '#fff',
    default: '#fafafa'
  },
  primary: {
    light: '#33b3e5',
    main: '#00a0df',
    dark: '#00709c',
    contrastText: '#fff'
  },
  secondary: {
    light: '#ff4081',
    main: '#f50057',
    dark: '#c51162',
    contrastText: '#fff'
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#fff'
  },
  type: 'dark'
}

export default createMuiTheme({ palette, themeName })
