import React from 'react';
import logo from '../assets/DotControl-logo.png'
import { useSelector } from 'react-redux';

const Header = () => {
    const getSelectedMovie = useSelector(state => state.moviedetail);

    const backgImage = {
        backgroundImage: `url("${getSelectedMovie.Poster}")`, backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    const defaultImage = {
        background: '#FF2345'
    }

    return (
        <header className='header' style={getSelectedMovie.Poster ? backgImage : defaultImage}>
            <img className='header__logo' src={logo} alt='DotControl logo' />
            <h1 className='header__title'>{getSelectedMovie.Title}</h1>
            <p className='header__text'>{getSelectedMovie.Plot}</p>
            {getSelectedMovie.imdbID ? <a className='header__btn' href={`https://www.imdb.com/title/${getSelectedMovie.imdbID}/`} target="_blank" rel="noreferrer">More information<i className="fab fa-imdb header__btn__icon"></i></a> : null}
        </header>
    );
}

export default Header;