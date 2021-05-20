// @vendors
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// @actions
import { getResults } from '../../actions';

// @styles
import './styles.scss';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    return (
        <div className="search-bar">
            <div className="search-bar__logo" />
            <div className="search-bar__input">
                <input
                    className="search-bar__input-field"
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Nunca dejes de buscar"
                    type="text"
                    value={query}
                />
                <button
                    aria-label="search-btn"
                    className="search-bar__btn"
                    onClick={() => dispatch(getResults(query))}
                    type="submit"
                />
            </div>
        </div>
    );
};

export default SearchBar;
