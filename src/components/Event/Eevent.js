import React from 'react';
import './Eevent.css';

const eevent = (props ) =>  (
        <div className="event" onClick={props.clicked}>
            <span className="event-date">{props.data.day}</span>
            <h2 className="event-title">{props.data.name}</h2>
        </div>
);

export default eevent;