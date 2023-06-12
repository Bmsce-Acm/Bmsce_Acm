import {
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
    CONTACT_FAILURE,
} from '../Constants/contConsts.js';
import { CLEAR_ERROR_MESSAGE } from '../Constants/errConsts.js';

export const newContactReducer = (state = {}, action) => {
    switch (action.type) {
        case CONTACT_REQUEST:
            return {
                loading: true,
                ...state
            };
        case CONTACT_SUCCESS:
            return {
                loading: false,
                contact: action.payload
            };
        case CONTACT_FAILURE:
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
}