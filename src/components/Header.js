import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../assets/DotControl-logo.png'

const Header = () => {

    const selectedMovie = useSelector(state => state.selectedMovie);

    // dynamically sets header background
    const backgroundPoster = {
        background: `url("${selectedMovie.Poster}") no-repeat center/cover`,
    }

    return (
        <header className='header' style={selectedMovie.Poster ? backgroundPoster : null}>

            <img className='header__logo' src={logo} alt='DotControl logo' />

            <h1 className='header__title'>
                {selectedMovie.Title ? selectedMovie.Title : 'Featured Movie'}
            </h1>

            <p className='header__description'>
                {selectedMovie.Title ? selectedMovie.Plot : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            </p>

            <a className='header__btn' href={selectedMovie.imdbID ? `https://www.imdb.com/title/${selectedMovie.imdbID}/` : 'https://www.imdb.com/'} target="_blank" rel="noreferrer">
                More information
                <i className="fab fa-imdb header__btn__icon"></i>
            </a>

        </header>
    );
}

export default Header;