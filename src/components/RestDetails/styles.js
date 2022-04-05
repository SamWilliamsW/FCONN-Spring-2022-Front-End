import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    backgroundColor: '#DCDCDC',
    margin: '20px',
    padding: '20px', 
    borderRadius: '15px',
    width:'25%',
  },
  gridContainer: {
    // [theme.breakpoints.down('xs')]: {
    //   flexDirection: 'column-reverse',
    // },
    flexDirection:'row',
    display:'flex',
    justifyContent:"space-around",
    alignItems:"stretch",
    // width:'100%',
    display: 'flex',
    flexWrap:'wrap',
    // width: '100%',
    // [theme.breakpoints.down('lg')]: {
    //   flexWrap: 'wrap',
    //   flexDirection: 'column',
    // },
    borderRadius: '20px',
    // margin: '10px',

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
  phone: {
    textDecoration: 'none',
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
  tags: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'rgb(63, 81, 181)',

  },
}));
