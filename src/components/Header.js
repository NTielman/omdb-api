import React from 'react';
import logo from '../assets/DotControl-logo.png'
import { useSelector } from 'react-redux';

const Header = () => {
    const getSelectedMovie = useSelector(state => state.moviedetail);

    const backgImage = {
        backgroundImage: `url("${getSelectedMovie.Poster}")`, backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <header className='header' style={getSelectedMovie.Poster ? backgImage : null}>
            <img className='header__logo' src={logo} alt='DotControl logo' />
            <h1 className='header__title'>{getSelectedMovie.Title ? getSelectedMovie.Title : 'Featured Movie'}</h1>
            <p className='header__text'>{getSelectedMovie.Title ? getSelectedMovie.Plot : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
            <a className='header__btn' href={getSelectedMovie.imdbID ? `https://www.imdb.com/title/${getSelectedMovie.imdbID}/` : 'https://www.imdb.com/'} target="_blank" rel="noreferrer">More information<i className="fab fa-imdb header__btn__icon"></i></a>
        </header>
    );
}

export default Header;