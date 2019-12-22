import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  button: {
    height: '3.5rem',
    marginTop: '1rem'
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
    width: '100%'
  },
  messages: {
    paddingRight: '1rem',
    paddingLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto'
  }
}))

export default useStyles
