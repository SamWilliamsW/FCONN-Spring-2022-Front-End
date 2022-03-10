import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import restraunts from './restraunts';

export const reducers = combineReducers({ posts, auth, restraunts });