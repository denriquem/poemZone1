import { useState, useRef, useContext } from "react";
import classes from "./AuthForm.module.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";

require("dotenv").config();

const { REACT_APP_FBASE } = process.env;

const AuthForm = () => {
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const [isLogin, setIsLogin] = useState(true);

	const authCtx = useContext(AuthContext);

	const [isLoading, setLoading] = useState(false);

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		// validation
		setLoading(true);
		let url;
		if (isLogin) {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${REACT_APP_FBASE}`;
		} else {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${REACT_APP_FBASE}`;
		}
		axios
			.post(url, {
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true,
			})
			.then((response) => {
				console.log(response.data);
				setLoading(false);
				if (response.status === 200) {
					console.log(response);
					return response;
				} else {
					let errorMessage = "Authentication Failed";
					alert(errorMessage);
					throw new Error("Authentication Failed");
				}
			})
			.then((data) => {
				authCtx.login(data.data.idToken);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? "Login" : "Sign Up"}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="email">Your Email</label>
					<input type="email" id="email" required ref={emailInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Your Password</label>
					<input
						type="password"
						id="password"
						required
						ref={passwordInputRef}
					/>
				</div>
				<div className={classes.actions}>
					{!isLoading && (
						<button>{isLogin ? "Login" : "Create Account"}</button>
					)}
					{isLoading && <p>Loading...</p>}
					<button
						type="button"
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? "Create new account" : "Login with existing account"}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
