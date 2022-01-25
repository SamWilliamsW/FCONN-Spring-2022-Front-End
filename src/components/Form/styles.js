import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#DCDCDC'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  fileButton: {
    display: 'none'
  },
  fileWrapper: {
    backgroundColor: 'grey',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    marginBottom: 10,
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#112e51'
  },
}));
