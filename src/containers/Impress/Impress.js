import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './Impress.css';
import Eevents from './Eevents/Eevents';
import NewEvent from "./NewEvent/NewEvent";
import FullEvent from "./FullEvent/FullEvent";
import UserEvent from "./UserEvent/UserEvent";
import UpdateEvent from "./UpdateEvent/UpdateEvent";

const impress = (props ) =>  (
    <div>
    <Switch>
        <Route path="/" exact component={Eevents} />
        <Route path="/new" component={NewEvent} />
        <Route path="/my-impressions/:eventId" component={FullEvent} />
        <Route path="/update/:eventId" component={UpdateEvent} />
        <Route path="/:userId/:eventId" component={UserEvent} />
    </Switch>
    </div>
);

export default impress;