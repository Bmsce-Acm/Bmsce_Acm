import {
    ALL_EVENTS_REQUEST,
    ALL_EVENTS_SUCCESS,
    ALL_EVENTS_FAILURE,
} from '../Constants/eventsConsts.js';
import { CLEAR_ERROR_MESSAGE } from '../Constants/errConsts.js';

export const eventsReducer = (state = { events: [], yearsList: [] }, action) => {
    switch (action.type) {
        case ALL_EVENTS_REQUEST:
            return {
                loading: true,
                events: [],
                yearsList: [],
            }
        case ALL_EVENTS_SUCCESS:
            return {
                loading: false,
                events: action.payload.currEve,
                yearsList: action.payload.years_list,
            }
        case ALL_EVENTS_FAILURE:
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
