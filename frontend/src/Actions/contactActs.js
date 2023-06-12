import {
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
    CONTACT_FAILURE,
} from '../Constants/contConsts.js';
import { CLEAR_ERROR_MESSAGE } from '../Constants/errConsts.js';
import axios from 'axios';

export const makeNewContact = (name, email, subject, queryContent) => async (dispatch) => {
    try {
        dispatch({ type: CONTACT_REQUEST });
        const { data } = await axios.post(`http://localhost:8000/api/contacts/`, {
            name, email, subject, queryContent
        });
        dispatch({
            type: CONTACT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CONTACT_FAILURE,
            payload: error.message
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR_MESSAGE });
};