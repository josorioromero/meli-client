// @vendors
import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom';
import { useSelector } from 'react-redux';

// @components
import Detail from './components/detail';
import Result from './components/result';
import SearchBar from './components/search-bar';

// @styles
import './styles.scss';

const App = () => {
    const results = useSelector((state) => state.get('results'));
    const { categories, items } = results.toJS();

    return (
        <div className="app">
            <div className="app__search-bar">
                <SearchBar />
            </div>
            <div className="app__breadcrumb">
                { categories && !!categories.length ? categories.join(' > ') : null }
            </div>
            <div className="app__results">
                <Router>
                    <Switch>
                        <Route path="/detail/:id">
                            <Detail />
                        </Route>

                        <Route path="/">
                            {
                                !!items.length && items
                                    .map((item, idx) => (
                                        <Link key={idx} to={`/detail/${item.id}`}>
                                            <Result item={item} key={idx} />
                                        </Link>
                                    ))
                            }
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default App;
