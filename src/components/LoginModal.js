import React, { useState } from "react";
import { FormGroup, Modal, FormControl, FormLabel } from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Provider, useDispatch, useStore } from "react-redux"; // redux way for hooks
// Using react hooks here to pass in the open/close status for this modal

// Take in open/close toggle prop from main page
const LoginModal = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	const dispatch = useDispatch(); //redux dispatch actions
	const store = useStore();
	//  dispatch the auth state
	const userAuth = (sessionTrue) => {
		console.log(sessionTrue); // this is the JWT session
		dispatch({ type: "IS_AUTH", payload: sessionTrue });
		console.log(store);
	};

	// validate if an email address with @ symbol and password is input; else popup error
	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	// local state tracking keyboard input for email form
	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	// local state tracking keyboard input for password form
	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	// Hit the backend to register or check if user already exists, then redirect to login
	async function handleSubmit(event) {
		event.preventDefault();
		// this could retrieve a user object from the login, and send that to your backend. Have redux status of "isLoggedIn = true" -> then save the user info to redux store.
		// Need to have passport session...
		axios
			.post("/login", {
				email: email,
				password: password,
			})
			.then((res) => {
				// set the JWT token to local storage (might not need this step)
				localStorage.setItem("token", res.data.token);
				// Set the JWT token to a variable
				let authToken = localStorage.token;
				// Send the auth token to redux function, setting auth status to true. This isn't working.
				userAuth(authToken);
				// console.log(localStorage.token) // using local instead of Redux for now
				// Close modal
				history.push("/SearchForm");
			})
			.catch(function (error) {
				if (error.response) {
					alert("Email or doesn't exist.");
					// Request made and server responded
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log("Error", error.message);
				}
			});
	}

	return (
		<div>
			<Modal show={props.modalLoginOpen} onHide={props.handleModalLoginOpen}>
				<form onSubmit={handleSubmit}>
					<Modal.Header closeButton>
						<Modal.Title>Login</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormGroup controlId='email' bsSize='large'>
							<FormLabel>Email</FormLabel>
							<FormControl
								autoFocus
								type='email'
								value={email}
								onChange={handleChangeEmail}
								// onChange={e => handleChangeEmail(e.target.value)}
							/>
						</FormGroup>
						<FormGroup controlId='password' bsSize='large'>
							<FormLabel>Password</FormLabel>
							<FormControl
								// onChange={e => handleChangePassword(e.target.value)}
								type='password'
								value={password}
								onChange={handleChangePassword}
							/>
						</FormGroup>
					</Modal.Body>
					<Modal.Footer>
						{/* Make this a conditional render; if something is typed in both the login/password box, show this */}
						<MDBBtn variant='primary' disabled={!validateForm()} type='submit'>
							Log on
						</MDBBtn>
						<MDBBtn variant='danger' onClick={props.handleModalLoginOpen}>
							Cancel
						</MDBBtn>
					</Modal.Footer>
				</form>
			</Modal>
		</div>
	);
};

export default LoginModal;
