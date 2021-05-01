import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../actions';

const MovieModal = () => {

    const dispatch = useDispatch();
    const movieInfo = useSelector(state => state.selectedMovie);
    const imdbLink = `https://www.imdb.com/title/${movieInfo.imdbID}/`

    return (
        <div className="backdrop" onClick={() => {
            dispatch(toggleModal())
        }}>
            <i className="fas fa-times backdrop__icon"></i>

            <div className="modal">
                <img src={movieInfo.Poster} alt='movie poster' className="modal__poster" />
                <div className="modal__info" >
                    <h1 className="modal__info__title">{movieInfo.Title}</h1>
                    <p className="modal__info__description">{movieInfo.Plot}</p>
                    <a className="modal__info__btn" href={imdbLink} target="_blank" rel="noreferrer">
                        More information
                        <i className="fab fa-imdb modal__info__btn__icon"></i>
                    </a>
                </div>
            </div >

        </div >
    );
}

export default MovieModal;