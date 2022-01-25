import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor: '#DCDCDC'
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
    backgroundColor: '#e0aa0f '

  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton: {
    backgroundColor: '#112e51',
  }
}));
