import { FETCH_ALL, FETCH_RESTAURANT, FETCH_BY_SEARCH, FETCH_BY_CREATOR } from '../constants/actionTypes';

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        restaurants: action.payload.data,
        // currentPage: action.payload.currentPage,
        // numberOfPages: action.payload.numberOfPages,
      };
    // case FETCH_BY_SEARCH:
    // case FETCH_BY_CREATOR:
    //   return { ...state, restaurants: action.payload.data };
    case FETCH_RESTAURANT:
      return { ...state, restaurants: action.payload.restaurant };
    default:
      return state;
  }
};