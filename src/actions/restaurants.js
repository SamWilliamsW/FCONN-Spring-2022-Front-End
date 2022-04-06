import { FETCH_RESTAURANT, FETCH_BY_CREATOR, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_ALL_RESTAURANTS } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getRestaurant = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchRestaurant(id);

    dispatch({ type: FETCH_RESTAURANT, payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};
///
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

//export const getPostsByCreator = (name) => async (dispatch) => {
//  try {
//    dispatch({ type: START_LOADING });
//    const { data: { data } } = await api.fetchPostsByCreator(name);
//
//    dispatch({ type: FETCH_BY_CREATOR, payload: { data } });
//    dispatch({ type: END_LOADING });
//  } catch (error) {
//    console.log(error);
//  }
//};

// export const getPostsBySearch = (searchQuery) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });
//     const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

//     dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
//     dispatch({ type: END_LOADING });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const createPost = (post, history) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });
//     const { data } = await api.createPost(post);

//     dispatch({ type: CREATE, payload: data });

//     history.push(`/posts/${data._id}`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const likePost = (id) => async (dispatch) => {
//   const user = JSON.parse(localStorage.getItem('profile'));

//   try {
//     const { data } = await api.likePost(id, user?.token);

//     dispatch({ type: LIKE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const commentPost = (value, id) => async (dispatch) => {
//   try {
//     const { data } = await api.comment(value, id);

//     dispatch({ type: COMMENT, payload: data });
//     return data.comments;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await await api.deletePost(id);

//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteCommentPost = (id, commentIndex) => async (dispatch) => { //
//     try {
//         const { data } = await api.deleteComment(id, commentIndex);

//         dispatch({ type: DELETE_COMMENT, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// };


// This is for reporting a post. The method is called reportPost in the backend.
// export const reportPost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.reportPost(id);

//     dispatch({ type: REPORT, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// }