import React, { useState, useEffect, useCallback } from 'react'
import { Avatar, Button, AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const styles = useStyles();

  const logout = useCallback(() => {
    setUser(null);
    dispatch({ type: actionType.LOGOUT });
    history.push('/auth');
  }, []);

  const profile = () => {
    //console.log(user.result);
    history.push(`/creator/${user.result.name}`);
  }

  const backToSignIn = () => {
    history.push('/auth');
    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={styles.appBar} position="static">
      {user?.result == undefined || user?.result == null ?
        <Link to="/" className={styles.brandContainer} style={{ textDecoration: 'none' }}>
          <h4 className={styles.heading}>CAMPUS CANTINA</h4>
        </Link>
        : <Link to="/posts" className={styles.brandContainer} style={{ textDecoration: 'none' }}>
          <h4 className={styles.heading}>CAMPUS CANTINA</h4>
        </Link>
      }
      <Toolbar className={styles.toolbar}>
        {user?.result ? (
          <div className={styles.profile}>
            <Link to="/mapContainer" className={styles.brandContainer} style={{ textDecoration: 'none' }}>
            <Button className={styles.userName}>MapTest</Button></Link>
            <Link to="/restaurants" className={styles.brandContainer} style={{ textDecoration: 'none' }}>
            <Button className={styles.userName}>restaurants</Button></Link>
            <Avatar className={styles.blue} alt={user?.result.name} src={user?.result.imageUrl}></Avatar>
            <Button className={styles.userName} variant="contained" onClick={profile}>{user?.result.name}</Button>
            <Link to="/Account" className={styles.brandContainer} style={{ textDecoration: 'none' }}>
            <Button className={styles.userName}>Account</Button></Link>
            <Button variant="contained" className={styles.logout} color="secondary" onClick={logout} href="/auth">Logout</Button>
          </div>
        ) : (
          <Button className={styles.signin} onClick={backToSignIn} variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
