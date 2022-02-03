import { makeStyles, alpha } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import { lightBlue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // [theme.breakpoints.down('sm')]: {
    //   flexDirection: 'column',
    // },
    backgroundColor: '#e0aa0f',
  },  
  toolbar: {
    textAlign: 'right',
    display: 'inline',
    justifyContent: 'flex-end',
    width: '100%',
    backgroundColor: 'white',
    paddingTop: '15px',
    // [theme.breakpoints.down('sm')]: {
    //   width: 'auto',
    // },
  },
  // Logo: {
  //   display: 'row',
  //   backgroundColor: 'green',
  //   width: '100%',
  // },
  heading: {
    marginLeft: '10px',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    //fontWeight: 700,
    fontFamily: 'Cooper Black',
    color: '#112e51',
    marginBottom: '30px',
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
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
