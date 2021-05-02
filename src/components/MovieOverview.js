import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

const MovieList = () => {

    const [movieItems, setMovieItems] = useState({
        isLoading: false,
        movies: null,
    });

    // fetches list of 'superhero' movies
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


    const listMovieItems = () => {
        if (movieItems.movies) {
            const movies = movieItems.movies.map(movie => {
                return (
                    <MovieItem
                        movie={movie}
                        key={movie.imdbID} />)
            })
            return movies;
        }
    }

    return (
        <main>
            <div className='movie-list'>
                {movieItems.isLoading ? <p>Hold on while we fetch some movies...</p> : listMovieItems()}
            </div>
            <button className='load-btn'>Load more</button>
        </main>
    );
}

export default MovieList;