import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    backgroundColor: '#DCDCDC',
    margin: '20px',
    padding: '20px', 
    borderRadius: '15px',
  },
  pic: {
    borderRadius: '20px',
    objectFit: 'contain',
    width: '500px'
  },
  nopic: {
    borderRadius: '20px',
    objectFit: 'contain',
    width: '500px'
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
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
  commentsOuterContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '300px',
    overflowY: 'auto',
    marginRight: '30px',
  },
  message: {
    wordBreak: 'break-all',

  }
}));
