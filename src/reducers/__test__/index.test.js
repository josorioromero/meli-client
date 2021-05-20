// @vendors
import { fromJS } from 'immutable';

// @reducers
import { itemsReducer } from '../index';

// @actions
import {
    CLEAR_DETAILS,
    GET_RESULTS,
    GET_ITEM_DETAILS
} from '../../actions';

// @constants
const initialState = fromJS({
    results: {
        author: {
            name: '',
            lastname: ''
        },
        categories: [],
        items: []
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
        }
    }
});

describe('itemsReducer', () => {
    it('should return default state', () => {
        const newState = itemsReducer(undefined, { type: undefined });
        expect(newState.toJS()).toEqual(initialState.toJS());
    });

    it('should update results', () => {
        const results = {
            author: {
                name: 'Jorge',
                lastname: 'Osorio'
            },
            categories: ['a', 'b', 'c'],
            items: [{ title: 'iPhone 11', price: '150000'}]
        };

        const expected = {
            results,
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
                }
            }
        };

        const newState = itemsReducer(initialState, { type: GET_RESULTS, payload: results });
        expect(newState.toJS()).toEqual(expected);
    });

    it('should update item details', () => {
        const itemDetails = {
            author: {
                name: 'Jorge',
                lastname: 'Osorio'
            },
            categories: ['1', '2', '3'],
            item: {
                id: '123',
                title: 'title',
                price: {
                    currency: 'ARS',
                    amount: 0,
                    decimals: 0
                },
                picture: '123',
                condition: 'new',
                free_shiping: false,
                sold_quantity: 0,
                description: 'lorem ipsum'
            }
        };

        const expected = {
            results: {
                author: {
                    name: '',
                    lastname: ''
                },
                categories: [],
                items: []
            },
            itemDetails
        };

        const newState = itemsReducer(initialState, { type: GET_ITEM_DETAILS, payload: itemDetails });
        expect(newState.toJS()).toEqual(expected);
    });

    it('should clear item details', () => {
        const newState = itemsReducer(initialState, { type: CLEAR_DETAILS });
        expect(newState.toJS()).toEqual(initialState.toJS());
    });
});
