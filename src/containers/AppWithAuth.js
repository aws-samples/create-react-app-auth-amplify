import React from "react";
import config from '../aws-exports';
import {ImpressGreetings} from "../amplify-components/ImpressGreetings/ImpressGreetings";
import App from "./App";
import {Authenticator, Greetings} from "aws-amplify-react";

class AppWithAuth extends React.Component {
    render() {
        console.log(this.props);
        return (
                this.props.location !== '/impressions'
                ? <Authenticator hide={[Greetings]} amplifyConfig={config}>
                    <ImpressGreetings override={Greetings} />
                    <App auth={true} />
                </Authenticator>
                : <App auth={false} />
        );
    }
}

export default AppWithAuth;