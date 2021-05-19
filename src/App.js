// @vendors
import React from 'react';

// @components
import Result from './components/result';
import SearchBar from './components/search-bar';

// @styles
import './styles.scss';

const App = () => (
    <div className="app">
        <div className="app__search-bar">
            <SearchBar />
        </div>
        <div className="app__results">
            <Result /> 
        </div>
    </div>
);

export default App;
