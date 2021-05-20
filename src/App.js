// @vendors
import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// @actions
import { getResults } from './actions';

// @components
import Detail from './components/detail';
import Result from './components/result';
import SearchBar from './components/search-bar';

// @styles
import './styles.scss';

const App = () => {
   const results = useSelector(state => state.get('results'));
   const items = results && results.items ? results.items : [];

    return (
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
                            {
                                !!items.length && items.map(item => <Result item={item} />)
                            }
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default App;
