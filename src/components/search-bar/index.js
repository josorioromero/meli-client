// @vendors
import React from 'react';

// @styles
import './styles.scss';

const SearchBar = () => (
    <div className="search-bar">
        <div className="search-bar__logo" />
        <div className="search-bar__input">
            <input className="search-bar__input-field" placeholder="Nunca dejes de buscar" type="text" />
            <button aria-label="search-btn" className="search-bar__btn" type="submit" />
        </div>
    </div>
);

export default SearchBar;
