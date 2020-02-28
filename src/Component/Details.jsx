// import React, { Component } from 'react';
import React, {useState, useEffect, Fragment} from 'react';


function Details () {
    const [films, setFilms] = useState([]);
    const getFilms = async () => {
        let res= await fetch('https://ghibliapi.herokuapp.com/films');
        let films = await res.json();
        setFilms(films);
    }
    useEffect(() => {
        getFilms();
    }, []);

return(
    <React.Fragment>

        <div>
            <h2>Ghibli Filmography Deep Dive</h2>
            <ul>
                {films.map(films => (
                    <li key={films.id}>
                        {films.title}, {films.release_date}
                            <div>
                            Director: {films.director} | Producer: {films.producer}
                            </div>
                            <div>
                            {films.description}
                            </div>
                    </li>
                ))}
            </ul>
        </div>

    </React.Fragment>
)
};

export default Details