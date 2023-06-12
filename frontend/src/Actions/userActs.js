import {
    USER_REQUEST,
    USER_SUCCESS,
    NO_USER,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
} from "../Constants/userconsts.js";
import { CLEAR_ERROR_MESSAGE } from '../Constants/errConsts.js';
import axios from "axios";

export const tokenConfig = (getState) => {
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
};

export const getUserDetails = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_REQUEST });
        let link = `http://127.0.0.1:8000/api/bacm/auth/user/`;
        const { data } = await axios.get(link, tokenConfig(getState));
        dispatch({
            type: USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NO_USER,
            payload: "Please login"
        });
    }
};

export const loginUser = (username, password) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ username, password });
        let link = `http://127.0.0.1:8000/api/bacm/auth/login/`;
        const { data } = await axios.post(link, body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAILED,
            payload: "Wrong Authentication"
        });
    }
};

export const logoutUser = () => (dispatch, getState) => {
    try {
        let link = `http://127.0.0.1:8000/api/bacm/auth/logout/`;
        const token = getState().auth.token;
        console.log(token);
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        if (token) {
            config.headers['Authorization'] = `Token ${token}`;
        }
        axios.post(link, config);
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: "User logged out successfully!",
        });
        localStorage.removeItem("token");
    } catch (error) {
        dispatch({
            type: LOGOUT_FAILED,
            payload: "User failed to log out!"
        });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR_MESSAGE });
};
