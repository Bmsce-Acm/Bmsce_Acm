import {
    ALL_POSTS_REQUEST,
    ALL_POSTS_SUCCESS,
    ALL_POSTS_FAILURE,
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE,
} from '../Constants/postsConsts.js';
import { CLEAR_ERROR_MESSAGE } from '../Constants/errConsts.js';

export const postsReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case ALL_POSTS_REQUEST:
            return {
                loading: true,
                posts: [],
            }
        case ALL_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
            }
        case ALL_POSTS_FAILURE:
            return {
                loading: true,
                error: action.payload,
            }
        case CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    };
};

export const postReducer = (state = { post: {} }, action) => {
    switch (action.type) {
        case GET_POST_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case GET_POST_SUCCESS:
            return {
                loading: false,
                post: action.payload,
            };
        case GET_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};
