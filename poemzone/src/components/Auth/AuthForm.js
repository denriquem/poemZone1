import { useState, useRef } from "react";
import classes from "./AuthForm.module.css";
import axios from "axios";

require("dotenv").config();

const { REACT_APP_FBASE } = process.env;

const AuthForm = () => {
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const [isLogin, setIsLogin] = useState(true);

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
		if (isLogin) {
		} else {
			axios
				.post(
					`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${REACT_APP_FBASE}`,
					{
						email: enteredEmail,
						password: enteredPassword,
						returnSecureToken: true,
					}
				)
				.then((response) => {
					setLoading(false);
					console.log(response);
				})
				.catch((error) => {
					alert(error.message);
				});
		}
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
