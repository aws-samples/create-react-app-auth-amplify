import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './Impress.css';
import Eevents from './Eevents/Eevents';
import NewEvent from "./NewEvent/NewEvent";
import FullEvent from "./FullEvent/FullEvent";
import UserEvent from "./UserEvent/UserEvent";
import UpdateEvent from "./UpdateEvent/UpdateEvent";

const impress = (props ) =>  {

    const loggedInRoutes =
        <Switch>
            <Route path="/" exact component={Eevents} />
            <Route path="/my-events/new" component={NewEvent} />
            <Route path="/my-events/update/:eventId" component={UpdateEvent} />
            <Route path="/my-events/:eventId" component={FullEvent} />
            <Route path="/:userId/:eventId" component={UserEvent} />
        </Switch>;

    const loggedOutRoutes =
        <Switch>
            <Route path="/:userId/:eventId" component={UserEvent} />
        </Switch>;

    const actualRoutes = props.authState === 'signedIn' ? loggedInRoutes : loggedOutRoutes;

    return (
        <div>
            {actualRoutes}
        </div>
    );
}

export default impress;