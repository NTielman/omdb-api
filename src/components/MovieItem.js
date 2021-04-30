import React from 'react';

const MovieItem = ({ movie }) => {

    return (
        <div className='movie-list__movie-item'>
            <img src={movie.Poster} alt='movie poster' />
            <p>{movie.Title}</p>
            <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noreferrer">{movie.imdbID}</a>
        </div>
    );
}

export default MovieItem;