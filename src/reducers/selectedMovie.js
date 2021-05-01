const selectedMovie = (state = {}, action) => {

    switch (action.type) {

        case 'SELECTED-MOVIE':
            const movie = action.payload;
            return movie

        default:
            return state;
    }

}

export default selectedMovie;