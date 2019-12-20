import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  button: {
    height: '3.5rem',
    marginLeft: '1rem'
  },
  buttons: {
    marginTop: 'auto',
    paddingBottom: '1rem',
    paddingTop: '1rem'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  message: {
    width: '400px'
  },
  messages: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto'
  }
}))

export default useStyles
