import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: '#373737',
    maxWidth: '360px',
    padding: '8px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  message: {
    color: '#fff'
  },
  messageContainer: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
  },
  sender: {
    color: 'rgba(255,255,255,0.50)',
    fontSize: '1rem'
  },
  yourMessageContainer: {
    alignSelf: 'end',
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
  }
}))

export default useStyles
