import {
    ALL_EVENTS_REQUEST,
    ALL_EVENTS_SUCCESS,
    ALL_EVENTS_FAILURE,
} from '../Constants/eventsConsts.js';
import { CLEAR_ERROR_MESSAGE } from '../Constants/errConsts.js';
import axios from 'axios';

export const allYearWiseEvents = (thisYear) => async (dispatch) => {
    try {
        dispatch({ type: ALL_EVENTS_REQUEST });
        let link = `http://localhost:8000/api/events/`;
        const { data } = await axios.get(link);

        let years_list = [...new Set(data.map((eve) => { return eve.event_date.substring(0, 4) }))];

        let currEve = data.filter((e) => {
            return e.event_date.substring(0, 4) === `${thisYear}`;
        })

        dispatch({
            type: ALL_EVENTS_SUCCESS,
            payload: {
                years_list,
                currEve,
            },
        })
    } catch (error) {
        dispatch({
            type: ALL_EVENTS_FAILURE,
            payload: error.message
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR_MESSAGE });
};
