import { combineReducers } from "redux";

import {
    eventsReducer
} from './Reducers/eventsRed.js';

import {
    userDetailsReducer
} from './Reducers/userRed.js';

import {
    postsReducer,
    postReducer
} from './Reducers/postsRed.js';

import {
    newContactReducer
} from "./Reducers/contactsRed.js";

const mainReducer = combineReducers({
    events: eventsReducer,
    posts: postsReducer,
    post: postReducer,
    auth: userDetailsReducer,
    newContact: newContactReducer,
});

export default mainReducer;