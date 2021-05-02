import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

const MovieList = () => {

    const [movieItems, setMovieItems] = useState({
        isLoading: false,
        movies: [],
    });
    const [pageNum, setPageNum] = useState(1);

    const loadMovies = () => {
        const apiKey = '6907e1c0';
        const apiUrl = `http://www.omdbapi.com/?s=superhero&page=${pageNum}&apikey=${apiKey}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setMovieItems({ isLoading: false, movies: [...movieItems.movies, ...data.Search] })
            })
            .catch((err) => console.log(err.message));
        setPageNum(pageNum + 1);
    }

    // fetches initial list of movies on mount
    useEffect(() => {
        setMovieItems({ isLoading: true });
        loadMovies();
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
            <button className='load-btn' onClick={() => {
                loadMovies()
            }}>Load more</button>
        </main>
    );
}

export default MovieList;