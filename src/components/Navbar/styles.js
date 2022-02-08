import { makeStyles, alpha } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import { lightBlue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    backgroundColor: '#e0aa0f',
  },
  heading: {
    marginLeft: '10px',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    //fontWeight: 700,
    fontFamily: 'Cooper Black',
    color: '#112e51',
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    //width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
    padding: '6px 12px'
  },
  signin: {
    backgroundColor: '#112e51',
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
