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
            <i className="fas fa-times backdrop__icon"></i>
            <div className="modal">
                {!getMovieInfo ? <p className="modal__placeholder-text">loading card info...</p> : null}
                <img src={getMovieInfo.Poster} alt='movie poster' className="modal__poster" />
                <div className="modal__info" >
                    <h1 className="modal__info__title">{getMovieInfo.Title}</h1>
                    <p className="modal__info__description">{getMovieInfo.Plot}</p>
                    <a className="modal__info__btn" href={`https://www.imdb.com/title/${getMovieInfo.imdbID}/`} target="_blank" rel="noreferrer">More information<i className="fab fa-imdb modal__info__btn__icon"></i></a>
                </div>
            </div >
        </div >
    );
}

export default DetailModal;