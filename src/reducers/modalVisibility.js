const modalIsVisible = (state = false, action) => {

    switch (action.type) {

        case 'TOGGLE-MODAL':
            return !state;

        default:
            return state;
    }

}

export default modalIsVisible;