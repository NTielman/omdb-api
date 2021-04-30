import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

const MovieList = () => {
    const [movieItems, setMovieItems] = useState({
        isLoading: false,
        movies: null,
    });

    useEffect(() => {

        setMovieItems({ isLoading: true })
        const apiKey = '6907e1c0'
        const apiUrl = `http://www.omdbapi.com/?s=superhero&apikey=${apiKey}`
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setMovieItems({ isLoading: false, movies: data.Search })
            })
            .catch((err) => console.log(err.message));

    }, [setMovieItems]);


    const showMovieItems = () => {
        if (movieItems.movies) {
            const items = movieItems.movies.map(movie => {
                return (
                    <MovieItem
                        movie={movie}
                        key={movie.imdbID} />)
            })
            return items;
        }
    }

    return (
        <section className='movie-list'>
            {movieItems.isLoading ? 'Hold on while we fetch some movies' : showMovieItems()}
            <button>Load more</button>
        </section>
    );
}

export default MovieList;