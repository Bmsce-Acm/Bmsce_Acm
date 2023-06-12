import {
    USER_REQUEST,
    USER_SUCCESS,
    NO_USER,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
} from "../Constants/userconsts.js";
import { CLEAR_ERROR_MESSAGE } from '../Constants/errConsts.js';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null,
};

export const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                loading: false,
                isAuthenticated: true,
            }
        case NO_USER:
        case LOGIN_FAILED:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                loading: false,
                message: action.payload,
            }
        case CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
};
