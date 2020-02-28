import React, {useState, useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Details from './Details';

function App () {

    return (
       
        <Router>
            <Fragment>
                <button>
                <Link to="/">Home</Link>
                </button>
                {/* <button>
                <Link to="/:id/details">Details</Link>
                </button> */}
                <Switch>
                    <Route exact path = "/" component={Home} />
                    <Route exact path = "/:id/details" component={Details} />
                </Switch>
            </Fragment>
        </Router>
    );
}

export default App