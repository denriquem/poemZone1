import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";

require("dotenv").config();

const ProfileForm = () => {
	const history = useHistory();
	const { REACT_APP_FBASE } = process.env;

	const newPasswordInputRef = useRef();
	const authCtx = useContext(AuthContext);

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredPassword = newPasswordInputRef.current.value;

		fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${REACT_APP_FBASE}}
		`,
			{
				method: "POST",
				body: JSON.stringify({
					idToken: authCtx.token,
					password: enteredPassword,
					returnSecureToken: false,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then((res) => {
			// assumes alway succeeds
			history.replace("/");
		});
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input
					type="password"
					id="new-password"
					minLength="7"
					ref={newPasswordInputRef}
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
