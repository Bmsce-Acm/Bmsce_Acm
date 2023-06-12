import {
    ALL_POSTS_REQUEST,
    ALL_POSTS_SUCCESS,
    ALL_POSTS_FAILURE,
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE,
} from '../Constants/postsConsts.js';
import { CLEAR_ERROR_MESSAGE } from '../Constants/errConsts.js';
import axios from 'axios';

export const allPosts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_POSTS_REQUEST });
        let link = `http://localhost:8000/api/blogs/`;
        const { data } = await axios.get(link);
        dispatch({
            type: ALL_POSTS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_POSTS_FAILURE,
            payload: error.message
        });
    }
};

export const getCategoryName = async (id) => {
    try {
        let link = `http://localhost:8000/api/categories/${id}`;
        const data = await axios.get(link);
        return data.name;
    } catch (error) {
        return "Bmsce Acm"
    }
};

export const getPostDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_POST_REQUEST });
        let link = `http://localhost:8000/api/blogs/${id}`;
        const { data } = await axios.get(link);
        dispatch({
            type: GET_POST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_POST_FAILURE,
            payload: error.message
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR_MESSAGE });
};
