const moviedetail = (state = {}, action) => {

    switch (action.type) {
        case 'SELECTED-MOVIE':

            const movieItem = action.payload;

            return movieItem
        default:

            return state;
    }

}

export default moviedetail;