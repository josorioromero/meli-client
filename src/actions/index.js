// @constants
import { API_SERVICE_URL } from '../constants';

export const GET_RESULTS = 'GET_RESULTS';
export const getResults = query => dispatch => 
    fetch(`${API_SERVICE_URL}?q=${query}`)
        .then(res => res.json())
        .then((data) => {
            dispatch({ type: GET_RESULTS, payload: data });
        });

export const CLEAR_DETAILS = 'CLEAR_DETAILS';
export const clearDetails = () => ({
    type: CLEAR_DETAILS
});

export const GET_ITEM_DETAILS = 'GET_ITEM_DETAILS';
export const getItemDetails = id => dispatch => 
    fetch(`${API_SERVICE_URL}/${id}`)
        .then(res => res.json())
        .then((data) => {
            dispatch({ type: GET_ITEM_DETAILS, payload: data });
        });

