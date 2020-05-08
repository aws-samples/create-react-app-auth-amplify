import React from "react";
import {Greetings, Nav, NavBar, NavRight, AmplifyTheme} from "aws-amplify-react";
import {NavLink} from "react-router-dom";
import './ImpressGreetings.css';

export class ImpressGreetings extends Greetings {
    render() {
        const authState = this.props.authState || this.state.authState;
        const signedIn = authState === 'signedIn';

        const theme = this.props.theme || AmplifyTheme;
        const greeting = signedIn
            ? this.userGreetings(theme)
            : this.noUserGreetings(theme);
        if (!greeting) {
            return null;
        }

        return (
            <NavBar theme={theme}>
                <Nav theme={theme}>
                    <NavRight theme={theme}>
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/new">Add new</NavLink>
                        {greeting}
                    </NavRight>
                </Nav>
            </NavBar>
        );
    }
}