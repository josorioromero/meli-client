// @vendors
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

import Result from '../index';

// initial state
const item = {
    free_shipping: false,
    location: {
        city: '',
        state: ''
    },
    picture: '',
    price: {
        amount: 0,
        currency: 'ARS',
        decimals: 0
    },
    title: ''
};

describe('Result Component', () => {
    it('renders correctly', () => {
        const history = createMemoryHistory();
        const route = '/';
        history.push(route);

        const { container } = render(
            <Router history={history}>
                <Result item={item} />
            </Router>
        );
        
        expect(container).toMatchSnapshot();
    });
});
