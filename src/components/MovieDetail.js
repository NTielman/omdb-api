import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../actions';

const DetailModal = () => {
    const dispatch = useDispatch();
    const getMovieInfo = useSelector(state => state.moviedetail);

    return (
        <div className="backdrop" onClick={() => {
            dispatch(toggleModal())
        }}>
            <div className="modal">
                <i className="fas fa-times modal__icon"></i>

                {!getMovieInfo ? <p className="modal__placeholder-text">loading card info</p> : null}
                <img src={getMovieInfo.Poster} alt='movie poster' />
                <h1 className="modal__title">{getMovieInfo.Title}</h1>
                <p className="modal__description">{getMovieInfo.Plot}</p>
                <a className="modal__btn" href={`https://www.imdb.com/title/${getMovieInfo.imdbID}/`} target="_blank" rel="noreferrer">More information</a>
            </div >
        </div >
    );
}

export default DetailModal;