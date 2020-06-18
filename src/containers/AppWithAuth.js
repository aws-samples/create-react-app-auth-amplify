import React from "react";
import config from '../aws-exports';
import {ImpressGreetings} from "../amplify-components/ImpressGreetings/ImpressGreetings";
import App from "./App";
import {Authenticator, Greetings} from "aws-amplify-react";
import Auth from "@aws-amplify/auth";

class AppWithAuth extends React.Component {

    state = {authState: 'loading'};

    render() {
        console.log(this.props.location);
        return (
                <Authenticator hide={[Greetings]} amplifyConfig={config}>
                    <ImpressGreetings override={Greetings} />
                    <App authState={this.state.authState} />
                </Authenticator>
        );
    }

    componentDidMount() {
        Auth.currentAuthenticatedUser()
            .then(user => {
                console.log(user);
                if (user) {
                    this.setState({authState: 'loggedIn'});
                } else {
                    this.setState({authState: 'loggedOut'});
                }
            })
            .catch(err => {
                this.setState({authState: 'loggedOut'});
            });
    }
}

export default AppWithAuth;