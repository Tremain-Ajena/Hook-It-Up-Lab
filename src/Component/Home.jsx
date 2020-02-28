// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import React, {useState, useEffect, Fragment} from 'react';


function Home () {
    const [films, setFilms] = useState([]);
    const getFilms = async () => {
        let res= await fetch('https://ghibliapi.herokuapp.com/films');
        let films = await res.json();
        setFilms(films);
    }
    useEffect(() => {
        getFilms();
    }, []);

    // fetch("https://ghibliapi.herokuapp.com/films")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((obj => {
    //             console.log(obj)
    //             this.setState({
                
    //                 films: obj

    //             })
    //         }))
    //         .catch((error => console.log('Could not execute task')));

    return (
        // <div>
        <React.Fragment>
        <h2>Studio Ghibli Filmography</h2>
            
            <div>
                <ul>
                    {films.map(films => (
                        <li key={films.id}>
                            {films.title}, {films.release_date}
                        </li>
                    ))}
                </ul>
            </div>

        </React.Fragment>
    )
};

export default Home