import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import restaurants from './restaurants';

export const reducers = combineReducers({ posts, auth, restaurants });