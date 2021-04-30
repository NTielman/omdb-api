import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ isLoading, movies }) => {
    const movieItems = () => {
        if (movies) {
            const items = movies.map(movie => {
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
            {isLoading ? 'Hold on while we fetch some movies' : movieItems()}
        </section>
    );
}

export default MovieList;