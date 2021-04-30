import React from 'react';
import logo from '../assets/DotControl-logo.png'
import { useSelector } from 'react-redux';

const Header = () => {
    const getSelectedMovie = useSelector(state => state.moviedetail);

    return (
        <section className='header'>
            <img src={logo} alt='DotControl logo' />
            <img src={getSelectedMovie.Poster} alt='movie poster' />
            <p>{getSelectedMovie.Title}</p>
            <p>{getSelectedMovie.Plot}</p>
            <a href={`https://www.imdb.com/title/${getSelectedMovie.imdbID}/`} target="_blank" rel="noreferrer">More information</a>
        </section>
    );
}

export default Header;