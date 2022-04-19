import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/restaurants');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/restaurants');
  } catch (error) {
    console.log(error);
  }
};

// This is basically the same thing as the regular signup method but for restaurants owners to sign up.
  export const businesssignup = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.businessSignUp(formData);

      dispatch({ type: AUTH, data });

      router.push('/restaurants');
    } catch (error) {
      console.log(error);
    }
  };