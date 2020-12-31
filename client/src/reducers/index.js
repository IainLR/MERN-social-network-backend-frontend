import { combineReducers } from 'redux';
// this entire file is our root reducer
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
});
