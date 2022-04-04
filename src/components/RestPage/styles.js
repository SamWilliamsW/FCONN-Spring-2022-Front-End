import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '50px',
  },
  subtitles: {
    display: 'inline',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  container: {
    backgroundColor: '#DCDCDC',
    margin: '20px',
    padding: '20px', 
    borderRadius: '15px',
    display: 'grid',
    // width:'100%',
    // justifyContent:'flex-start',
  },
  pic: {
    borderRadius: '20px',
    objectFit: 'contain',
    // width: '500px'
  },
  nopic: {
    borderRadius: '20px',
    objectFit: 'contain',
    width: '400px'
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  right: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  left: {
    height: '300px',
    overflowY: 'auto',
    marginRight: '30px',
  },
  message: {
    wordBreak: 'break-all',

  }
}));
