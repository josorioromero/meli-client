// @constants
import { API_SERVICE_URL } from '../constants';

export const GET_RESULTS = 'GET_RESULTS';
export const getResults = query => dispatch => {
    dispatch(isLoadingResults(true));
    return fetch(`${API_SERVICE_URL}?q=${query}`)
        .then(res => res.json())
        .then((data) => {
            dispatch(isLoadingResults(false));
            dispatch({ type: GET_RESULTS, payload: data });
        });
};

export const GET_ITEM_DETAILS = 'GET_ITEM_DETAILS';
export const getItemDetails = id => dispatch => {
    dispatch(isLoadingItems(true));
    return fetch(`${API_SERVICE_URL}/${id}`)
        .then(res => res.json())
        .then((data) => {
            dispatch(isLoadingItems(false));
            dispatch({ type: GET_ITEM_DETAILS, payload: data });
        });
};

