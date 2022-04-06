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
//const businessInitialState = { businessName: '', name:'', businessAddress: '', businessCity: '', businessState: '', businessPhoneNumber: '', email: '', password: '', confirmPassword: '', businessZip: '', businessDescription: '', businessHoursStart: [], businessHoursEnd: [], businessTags: [], businessDelivery: false, businessTakeout: false, businessDineIn: false, businessMenuLink: '', businessPhoto: ''};
const businessInitialState = { businessName: '', name:'', businessAddress: '', businessCity: '', businessState: '', businessPhoneNumber: '', email: '', password: '', confirmPassword: '', businessZip: '', businessDescription: '', businessHoursStartSun: 0, businessHoursStartMon: 0, businessHoursStartTue:0, businessHoursStartWed: 0, businessHoursStartThu: 0, businessHoursStartFri: 0, businessHoursStartSat: 0, businessHoursEndSun: 0, businessHoursEndMon:0, businessHoursEndTue: 0, businessHoursEndWed: 0, businessHoursEndThu: 0, businessHoursEndFri: 0, businessHoursEndSat: 0, businessTags: [], businessDelivery: false, businessTakeout: false, businessDineIn: false, businessMenuLink: '', businessPhoto: ''};
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

// We want our checkbox to take in a boolean value and toggle it.
const CheckBox = ({ checked, onChange, label }) => {
  const classes = useStyles();

  return (
      <div className={classes.paper}>
        {label}
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          value="value"
          checked={checked}
          onChange={onChange}
        />
      </div>
  );
}

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
            { isBusinessSignup && (<Input name="businessCity" label="Restaurant City" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessState" label="Restaurant State" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessZip" label="Restaurant Zipcode" handleChange={handleBusinessChange} full />)}
            { isBusinessSignup && (<Input name="businessDescription" label="Restaurant Description" handleChange={handleBusinessChange} multiline={true} fullWidth  />)}
            { isBusinessSignup && (<Input name="businessPhoneNumber" label="Phone Number" handleChange={handleBusinessChange} fullWidth />)}
            { isBusinessSignup && (<Input name="businessHoursStartSun" label="Sunday Start Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursEndSun" label="Sunday End Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursStartMon" label="Monday Start Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursEndMon" label="Monday End Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursStartTue" label="Tuesday Start Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursEndTue" label="Tuesday End Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursStartWed" label="Wednesday Start Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursEndWed" label="Wednesday End Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursStartThu" label="Thursday Start Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursEndThu" label="Thursday End Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursStartFri" label="Friday Start Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursEndFri" label="Friday End Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursStartSat" label="Saturday Start Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessHoursEndSat" label="Saturday End Hours" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessTags" label="Restaurant Tags" handleChange={handleBusinessChange} fullWidth />)}

<div style={{display: 'flex', justifyContent: 'center', position: 'global', width: '100%'}}>
      <label>
            {isBusinessSignup && (<CheckBox
              checked={businessForm.businessDelivery}
              onChange={(e) => setBusinessForm({ ...businessForm, businessDelivery: e.target.checked })}
              label="Delivery"
            />)}
            </label>
            <label>
            {isBusinessSignup && (<CheckBox
              checked={businessForm.businessTakeout}
              onChange={(e) => setBusinessForm({ ...businessForm, businessTakeout: e.target.checked })}
              label="Takeout"
            />)}
            </label>
            <label>
            {isBusinessSignup && (<CheckBox
              checked={businessForm.businessDineIn}
              onChange={(e) => setBusinessForm({ ...businessForm, businessDineIn: e.target.checked })}
              label="Dine In"
            />)}
            </label>
            </div>

            { isBusinessSignup && (<Input name="businessMenuLink" label="Menu Link" handleChange={handleBusinessChange} half />)}
            { isBusinessSignup && (<Input name="businessPhoto" label="Photo" handleChange={handleBusinessChange} half />)}

            { !isBusinessSignup && <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />}
            { isBusinessSignup && <Input name="password" label="Password" handleChange={handleBusinessChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />}
            { (isBusinessSignup || isSignup) && <Input name="confirmPassword " label="Repeat Password (Must be between 8 and 20 characters, must contain a number.)" handleChange={(isBusinessSignup)?handleBusinessChange:handleChange} type="password" /> }
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
