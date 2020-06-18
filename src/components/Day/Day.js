import React from 'react';
import Eevent from '../Event/Eevent';
import './Day.css';
import {Link} from "react-router-dom";

const day = (props ) =>  {
    let events = "No items";
    if (props.items.length > 0) {
        events = props.items.map(eevent => {
            return (
                <Link to={'/my-events/' + eevent.id} key={eevent.id}>
                    <Eevent data={eevent} />
                </Link>
            )
        });
    }

    return (
        <div className="day">
            <h2 className="day-title">{props.caption}</h2>
            { events }
        </div>
    );
}

export default day;