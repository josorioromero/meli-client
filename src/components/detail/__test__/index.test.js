// @vendors
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Detail from '../index';

// set up store
const mockStore = configureMockStore([thunk]);

// initial state
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

describe('Detail Component', () => {
    it('renders correctly', () => {
        const history = createMemoryHistory();
        const route = '/detail/MLA919739960';
        history.push(route);

        const store = mockStore(initialState);

        const { container } = render(
            <Provider store={store}>
                <Router history={history}>
                    <Detail />
                </Router>
            </Provider>
        );
        
        expect(container).toMatchSnapshot();
    });
});
