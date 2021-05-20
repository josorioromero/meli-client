// @vendors
import { fromJS } from 'immutable';

// @actions
import {
    GET_RESULTS,
    GET_ITEM_DETAILS,
} from '../actions';

const initialState = fromJS({
    results: {
        author: {
            name: '',
            lastname: ''
        },
        categories: [],
        items: [],
    },
    itemDetails: {
        author: {
            name: '',
            lastname: ''
        },
        categories: [],
        item: {
            id: '',
            title: '',
            price: {
                currency: 'ARS',
                amount: 0,
                decimals: 0
            },
            picture: '',
            condition: '',
            free_shiping: false,
            sold_quantity: 0,
            description: ''
        },
    }
});

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESULTS:
            return state.merge({
                results: fromJS(action.payload)
            });
        case GET_ITEM_DETAILS:
            return state.merge({
                itemDetails: fromJS(action.payload)
            });
        default:
            return state;
    }
}