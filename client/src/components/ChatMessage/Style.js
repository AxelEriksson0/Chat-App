import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: '#373737',
    maxWidth: '360px',
    padding: '8px'
  },
  fromYouCard: {
    backgroundColor: '#00a0df'
  },
  message: {
    color: '#fff',
    wordWrap: 'anywhere'
  },
  messageContainer: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
  },
  fromYouMessageContainer: {
    alignSelf: 'flex-end'
  },
  sender: {
    color: 'rgba(255,255,255,0.50)',
    fontSize: '1rem'
  }
}))

export default useStyles
