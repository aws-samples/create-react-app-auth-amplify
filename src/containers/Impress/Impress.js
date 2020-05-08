import React from 'react';
import { Route   } from 'react-router-dom';
import './Impress.css';
import Eevents from './Eevents/Eevents';
import NewEvent from "./NewEvent/NewEvent";
import FullEvent from "./FullEvent/FullEvent";
import UpdateEvent from "./UpdateEvent/UpdateEvent";

const impress = (props ) =>  (
    <div>
        <Route path="/" exact component={Eevents} />
        <Route path="/new" component={NewEvent} />
        <Route path="/my-impressions/:eventId" component={FullEvent} />
        <Route path="/update/:eventId" component={UpdateEvent} />
    </div>
);

export default impress;