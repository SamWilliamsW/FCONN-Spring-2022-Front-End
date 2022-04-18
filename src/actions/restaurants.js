import { FETCH_RESTAURANT, MESSAGE, DELETE_MESSAGE, REPORT, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_ALL_RESTAURANTS } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Fetch an individual restaurant by id from the database
export const getRestaurant = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchRestaurant(id);

    dispatch({ type: FETCH_RESTAURANT, payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};

// Fetch all restaurants from the database
export const getRestaurants = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchRestaurants(page);
    if (data.length === 0) {
      data = ["No restaurants found"];
    }

    dispatch({ type: FETCH_ALL_RESTAURANTS, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

// Fetch our messageBoard info from the database for a specific restaurant based on the id
export const messageBoard = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.message(value, id);

    dispatch({ type: MESSAGE, payload: data });
    return data.messages;
  } catch (error) {
    console.log(error);
  }
};


// Delete a message from the database from the messageBoard on the restaurant page based on the id
export const deleteMessage = (id, messageIndex) => async (dispatch) => { //
  try {
      const { data } = await api.deleteMessage(id, messageIndex);

      dispatch({ type: DELETE_MESSAGE, payload: data });
  } catch (error) {
      console.log(error);
  }
};

// This is for reporting a Message. The method is called reportMessage in the backend. 
// export const reportMessage = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.reportMessage(id);

//     dispatch({ type: REPORT, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// }
