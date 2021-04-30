import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectMovie, toggleModal } from '../actions';

const MovieItem = ({ movie }) => {
    const dispatch = useDispatch();
    const [movieItem, setMovieItem] = useState({
        isLoading: false,
        movie: null,
    });
    const movieInfo = () => {
        const movieRating = movieItem.movie.Ratings[0].Value;
        return (
            <div className='movie-list__movie-item__movie-info'>
                <p>{movieItem.movie.Title}</p>
                <p>{movieItem.movie.Genre}</p>
                <p>{movieItem.movie.imdbRating}</p>
                <span>{movieRating}</span>
            </div>)
    }

    useEffect(() => {

        setMovieItem({ isLoading: true })
        const apiKey = '6907e1c0'
        const apiUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setMovieItem({ isLoading: false, movie: data })
            })
            .catch((err) => console.log(err.message));

    }, [setMovieItem, movie.imdbID]);

    return (
        <div className='movie-list__movie-item' onClick={() => {
            dispatch(selectMovie(movieItem.movie))
            dispatch(toggleModal())
        }}>
            <img src={movie.Poster} alt='movie poster' className='movie-list__movie-item__poster' />
            {movieItem.movie ? movieInfo() : 'loading movie info...'}
        </div>
    );
}

export default MovieItem;