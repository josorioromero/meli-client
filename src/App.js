// @vendors
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// @components
import Detail from './components/detail';
import Result from './components/result';
import SearchBar from './components/search-bar';

// @styles
import './styles.scss';

const App = () => (
    <div className="app">
        <div className="app__search-bar">
            <SearchBar />
        </div>
        <div className="app__breadcrumb"> breadcrumb </div>
        <div className="app__results">
            <Router>
                <Switch>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>

                    <Route path="/">
                        <Result />
                    </Route>
                </Switch>
            </Router>
        </div>
    </div>
);

export default App;
