import { combineReducers } from 'redux';
import selectedMovie from './selectedMovie';
import modalVisibility from './modalVisibility';


const rootReducer = combineReducers({
    selectedMovie,
    modalVisibility
});

export default rootReducer;