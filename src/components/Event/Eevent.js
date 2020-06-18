import React from 'react';
import './Eevent.css';

const eevent = (props ) =>  (
        <div className="event" onClick={props.clicked}>
            <p className="event-title">{props.data.name}</p>
        </div>
);

export default eevent;