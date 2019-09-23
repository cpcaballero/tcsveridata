import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Initial State. An empty object,
// the actual empty state for the entire store
const initialState = {} 

const middleware = [thunk];

// the rootReducer is the index.js inside reducers. 
// Since it is index.js, it is imported as the root reducer
const store = createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;