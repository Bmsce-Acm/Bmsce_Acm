import {
    createStore,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import mainReducer from './mainReducer.js';

const middleware = [thunk];

// const userToken = localStorage.getItem('token')
//     ? JSON.parse(localStorage.getItem('token')) : null;

const initialState = {};

export const store = createStore(
    mainReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);