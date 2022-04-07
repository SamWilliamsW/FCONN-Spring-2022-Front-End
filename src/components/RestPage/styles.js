import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '50px',
  },
  calendarandmap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row', 
  },
  subtitles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '0 15px',    
    alignItems: 'center',
    color: 'green',
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
  tags: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: '10px',  
    alignItems: 'center',
    color: 'rgb(63, 81, 181)',

  },
  pic: {
    borderRadius: '20px',
    objectFit: 'contain',
    maxWidth: '500px',
    // width: '500px'
  },
  nopic: {
    borderRadius: '20px',
    // objectFit: 'contain',
    maxWidth: '400px',
    height: 'auto',
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
    // height: '300px',
    // overflowY: 'auto',
    marginRight: '30px',
  },
  message: {
    wordBreak: 'break-all',

  }
}));
