import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';

export default combineReducers({
    // we'll place all our reducers here to be merged into one
    // merging all reducers in a combineReducer is one of the 
    // principles of redux
    alert, 
    auth,
    profile
});