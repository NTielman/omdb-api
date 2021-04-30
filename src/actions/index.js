export const selectMovie = (movieId) => {
    return {
        type: 'SELECTED-MOVIE',
        payload: movieId,
    }
}