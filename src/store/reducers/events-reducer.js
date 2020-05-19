import * as actionTypes from '../actions/actions';

const initialState = {
    events: [],
    currentEvent: null
};

const eventsReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_EVENTS:
            return {
                ...state,
                events: action.events
            }
        case actionTypes.GET_EVENT:
            return {
                ...state,
                currentEvent: action.currentEvent
            }
        // TODO Delete without refresh
        case actionTypes.DELETE_EVENT:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
};

export default eventsReducer;