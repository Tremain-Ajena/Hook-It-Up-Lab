import React, {useState, useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Details from './Details';

function App () {
    const [films, setFilms] = useState([]);
    const getFilms = async () => {
        let res= await fetch('https://ghibliapi.herokuapp.com/films');
        let films = await res.json();
        setFilms(films);
    }
    useEffect(() => {
        getFilms();
    }, []);

    return (
        // <h1>Hello, World</h1>
        <Router>
            <Fragment>
                <Link to="/">Home</Link>
                <Link to="/:id/details">Details</Link>
                <Switch>
                    <Route exact path = "/" component={Home} />
                    <Route exact path = "/:id/details" component={Details} />

                </Switch>
                <div>
                    <h2>Studio Ghibli Filmography</h2>
                    <ul>
                        {films.map(films => (
                            <li key={films.id}>
                                {films.title}, {films.release_date}
                            </li>
                        ))}
                    </ul>
                </div>
            </Fragment>
        </Router>
    );
}

export default App