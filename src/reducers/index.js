import { combineReducers } from 'redux';
import moviedetail from './movieDetail';
import modal from './modal';


const rootReducer = combineReducers({
    moviedetail,
    modal
});

export default rootReducer;