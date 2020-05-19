import * as actionTypes from '../actions/actions';
import {detectCurrentDate} from "../selectors/dates-selector";

const initialState = {
    currentDate: detectCurrentDate()
};

const datesReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_DATE:
            return {
                ...state,
                currentDate: action.currentDate
            }
        default:
            return {
                ...state
            }
    }
};

export default datesReducer;