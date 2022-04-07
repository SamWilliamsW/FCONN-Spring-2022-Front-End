import { makeStyles, alpha } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import { lightBlue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e0aa0f',
    overflowX: 'hidden',
  },
  heading: {
    marginLeft: '10px',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontFamily: 'Cooper Black',
    color: '#112e51',
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
// grey nav bar
  toolbar: {
    display: 'inline',
    paddingTop: '10px',
    width: '100%',
    alignItems: 'center',
    background: '#DCDCDC',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  logout: {
    //marginLeft: '20px',
    marginRight: '10px',
    padding: '6px 12px'
  },
  signin: {
    backgroundColor: '#112e51',
  },
  account: {
    marginRight: '10px',
    padding: '6px 12px',
    backgroundColor: '#112e51',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: 'grey'
    }
  },
  userName: {
    marginLeft: '10px',
    backgroundColor: '#112e51',
    display: 'flex',
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: 'grey'
    }
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  blue: {
    color: theme.palette.getContrastText(lightBlue[900]),
    backgroundColor: lightBlue[900],
  },
}));
