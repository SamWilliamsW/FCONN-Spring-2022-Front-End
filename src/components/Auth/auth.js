import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { signin, signup, businesssignup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './input';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
const businessInitialState = { businessName: '', name:'', businessAddress: '', businessDescription: '', businessPhoneNumber: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [businessForm, setBusinessForm] = useState(businessInitialState);
  const [isSignup, setIsSignup] = useState(false);
  const [isBusinessSignup, setIsBusinessSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    if (!isBusinessSignup){
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
    }
  };

  const switchBusinessMode = () => {
    if (!isSignup){
    setBusinessForm(businessInitialState);
    setIsBusinessSignup((prevIsBusinessSignup) => !prevIsBusinessSignup);
    setShowPassword(false);
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else if (isBusinessSignup) {
      dispatch(businesssignup(businessForm, history));
    }
    else {
      dispatch(signin(form, history));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push('/posts');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (error) => {
    console.log('Google Sign In was unsuccessful. Try again later' + error);
  }
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleBusinessChange = (e) => setBusinessForm({ ...businessForm, [e.target.name]: e.target.value });
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ (isBusinessSignup || isSignup) ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            { !isBusinessSignup && <Input name="email" label="Email Address" handleChange={handleChange} type="email" />}
            { isBusinessSignup && <Input name="email" label="Email Address" handleChange={handleBusinessChange} type="email" />}
            { isBusinessSignup && (<Input name="businessName" label="Restaurant Name" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessAddress" label="Restaurant Address" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessDescription" label="Restaurant Description" handleChange={handleBusinessChange} multiline={true} fullWidth  />)}
            { isBusinessSignup && (<Input name="businessPhoneNumber" label="Phone Number" handleChange={handleBusinessChange} half />)}
            { !isBusinessSignup && <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />}
            { isBusinessSignup && <Input name="password" label="Password" handleChange={handleBusinessChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />}
            { (isBusinessSignup || isSignup) && <Input name="confirmPassword" label="Repeat Password" handleChange={(isBusinessSignup)?handleBusinessChange:handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { (isBusinessSignup || isSignup) ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin
            clientId="333067682266-quhqcgac9486jm7c12p8kou6cl9d5gl3.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              { }
            </Grid>
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
              <Button onClick={switchBusinessMode}>
                Apply for a business account.
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
