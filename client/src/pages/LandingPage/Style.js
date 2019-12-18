import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  button: {
    height: '3.5rem',
    margin: theme.spacing(1),
    minWidth: '12.5rem'
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center'
  },
  form: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}))

export default useStyles
