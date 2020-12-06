import React, { Component } from "react";
import { Auth } from "aws-amplify";
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box"
  },
  submit: {
    width: "100%",
    backgroundColor: "#24336A", // "#4CAF50",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  header: {
    color: "#fff",
    backgroundColor: "#24346a",
    top: 0,
    left: 0,
    right: 0
  }
};

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  changeState(type, event) {
    const { changeAuthState } = this.props;
    changeAuthState(type, event);
  }

  onSubmit = event => {
    const { email, password } = this.state;

    Auth.signIn(email, password)
      .then(user => {
        this.setState(() => ({ ...INITIAL_STATE }));
        if (
          user.challengeName === "SMS_MFA" ||
          user.challengeName === "SOFTWARE_TOKEN_MFA"
        ) {
          this.changeState("confirmSignIn", user);
        } else if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          this.changeState("requireNewPassword", user);
        } else if (user.challengeName === "MFA_SETUP") {
          this.changeState("TOTPSetup", user);
        } else {
          this.changeState("signedIn", user);
        }
      })
      .catch(err => {
        const { authError } = this.props;
        if (err.code === "UserNotConfirmedException") {
          this.changeState("confirmSignUp");
        } else if (err.code === "PasswordResetRequiredException") {
          this.changeState("requireNewPassword");
        } else {
          authError(err);
        }
        this.setState(updateByPropertyName("error", err));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div>
        <header style={styles.header}>
          <div >
            <a aria-current="page" class="active" href="/">
              <img src="https://cdn.crediwatch.org/images/logo.svg" alt="Logo" class="jss4" />
            </a>
            <div class="MuiBox-root jss5">
            </div>
          </div>
        </header>
        <div style={styles.container}>
          <h1>Apna Cred</h1>
          <form onSubmit={this.onSubmit}>
            <input
              style={styles.input}
              value={email}
              onChange={event =>
                this.setState(updateByPropertyName("email", event.target.value))
              }
              type="text"
              placeholder="Email Address"
            />
            <input
              style={styles.input}
              value={password}
              onChange={event =>
                this.setState(
                  updateByPropertyName("password", event.target.value)
                )
              }
              type="password"
              placeholder="Password"
            />
            <button style={styles.submit} disabled={isInvalid} type="submit">
              Sign In
            </button>

            {error && <p>{error.message}</p>}
          </form>
          <div>
            <p> No account? </p>
            <button
              style={styles.submit}
              onClick={() => this.changeState("signUp")}
            >
              Create account
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;