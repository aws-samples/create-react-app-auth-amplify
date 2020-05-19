export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENT = 'GET_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const GET_DATE = 'GET_DATE';

export const getEvents = (events) => {
    return {
        type: GET_EVENTS,
        events: events
    };
};

export const getEvent = (currentEvent) => {
    return {
        type: GET_EVENT,
        currentEvent: currentEvent
    };
};

export const updateEvent = (currentEvent) => {
    return {
        type: UPDATE_EVENT,
        currentEvent: currentEvent
    };
};

export const addEvent = (newEvent) => {
    return {
        type: ADD_EVENT,
        newEvent: newEvent
    };
};

export const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        eventId: eventId
    };
};

export const getDate = (currentDate) => {
    return {
        type: GET_DATE,
        currentDate: currentDate
    };
};