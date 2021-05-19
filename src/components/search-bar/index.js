// @vendors
import React from 'react';

// @styles
import './styles.scss';

const SearchBar = () => (
    <div className="search-bar">
        <div className="search-bar__logo" />
        <div className="search-bar__input">
            <input className="search-bar__input-field" type="text" placeholder="Nunca dejes de buscar" />
            <button className="search-bar__btn" />
        </div>
    </div>
);

export default SearchBar;
