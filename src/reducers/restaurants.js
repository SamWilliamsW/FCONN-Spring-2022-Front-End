import { FETCH_ALL_RESTAURANTS, FETCH_RESTAURANT, DELETE_MESSAGE, MESSAGE } from '../constants/actionTypes';
 
export default (state = { isLoading: true, restaurants: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL_RESTAURANTS:
      return {
        ...state,
         restaurants: action.payload.data,
         currentPage: action.payload.currentPage,
         numberOfPages: action.payload.numberOfPages,

      };
    // case FETCH_BY_SEARCH:
    // case FETCH_BY_CREATOR:
    //   return { ...state, restaurants: action.payload.data };
    case MESSAGE:
      return {
        ...state,
        restaurants: state.restaurants.map((restaurant) => {
          if (restaurant._id === +action.payload._id) {
            return action.payload;
          }
          return restaurant;
        }),
      };
    case DELETE_MESSAGE:
      return { ...state, restaurants: state.restaurants.map((restaurant) => (
        restaurant._id === action.payload._id ? action.payload : restaurant)) 
      };
    case FETCH_RESTAURANT:
      return { 
        ...state, 
        restaurant: action.payload.restaurant 
      };
    default:
      return state;
  }
};