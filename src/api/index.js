import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchRestaurant = (id) => API.get(`/restaurants/${id}`);
export const fetchRestaurants = (page) => API.get(`/restaurants?page=${page}`); 
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const deleteComment = (id, commentIndex) => API.patch(`/posts/${id}/deleteCommentPost`, { commentIndex }); //
export const message = (value, id) => API.post(`/restaurants/${id}/message`, { value });
export const deleteMessage = (id, messageIndex) => API.patch(`/restaurants/${id}/deleteMessage`, { messageIndex }); //
// export const reportMessage = (id) => API.patch(`/restaurants/${id}/reportMessage`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`); 
export const reportPost = (id) => API.patch(`/posts/${id}/reportPost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const businessSignUp = (formData) => API.post('/user/businesssignup', formData);