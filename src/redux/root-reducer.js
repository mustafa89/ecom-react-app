// package to combine the reducers.
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer'

//the key is the reducer. or actual slices of state
export default combineReducers( {user: userReducer} )