import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectMovie, toggleModal } from '../actions';
import defaultPoster from '../assets/movie-poster.png';

const MovieItem = ({ movie }) => {

    const dispatch = useDispatch();
    const [movieItem, setMovieItem] = useState({
        isLoading: false,
        movie: null,
    });

    // fetches individual movie details
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

    const showMovieInfo = () => {
        const movieRating = movieItem.movie.Ratings[0].Value;
        return (
            <div className='movie-item__movie-info'>
                <h3 className='movie-item__movie-info__title'>{movieItem.movie.Title}</h3>
                <p className='movie-item__movie-info__genre'>{movieItem.movie.Genre}</p>
                <span className='movie-item__movie-info__rating' style={{ "--percent": `${movieItem.movie.imdbRating / 10 * 100}%` }}>{movieRating}</span>
            </div>)
    }

    return (
        <div className='movie-item'
            onClick={() => {
                dispatch(selectMovie(movieItem.movie))
                dispatch(toggleModal())
            }}>

            <img src={movie.Poster != "N/A" ? movie.Poster : defaultPoster} alt='movie poster' className='movie-item__poster' />
            {movieItem.movie ? showMovieInfo() : <p>loading movie info...</p>}
        </div>
    );
}

export default MovieItem;