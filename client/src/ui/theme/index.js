import { createMuiTheme } from '@material-ui/core/styles'
import paletteDark from './dark.json'
import paletteLight from './light.json'

const themeNameDark = 'Dart 20'
const themeNameLight = 'Dart 1'

export const darkTheme = createMuiTheme({ palette: paletteDark, themeNameDark })
export const lightTheme = createMuiTheme({ palette: paletteLight, themeNameLight })
