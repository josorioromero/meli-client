// @vendors
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import SearchBar from '../index';

// set up store
const mockStore = configureMockStore([thunk]);

describe('SearchBar Component', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Provider store={mockStore({})}>
                <SearchBar />
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
