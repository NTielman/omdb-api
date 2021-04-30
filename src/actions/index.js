export const selectMovie = (movieId) => {
    return {
        type: 'SELECTED-MOVIE',
        payload: movieId,
    }
}

export const toggleModal = () => {
    return {
        type: 'TOGGLE-MODAL',
    }
}