import React from "react";
import classes from "./AddPoemForm.module.css";

const AddPoemFrom = (props) => {
	const confirmHandler = (event) => {
		event.preventDefault();
	};

	return (
		<from onSubmit={confirmHandler}>
			<div className={classes.control}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name"></input>
				<div className={classes.control}>
					<label htmlFor="street">Street</label>
					<input type="text" id="street"></input>
				</div>
				<div className={classes.control}>
					<label htmlFor="postal">Postal Code</label>
					<input type="text" id="postal"></input>
				</div>
				<div className={classes.control}>
					<label htmlFor="city">City</label>
					<input type="text" id="city"></input>
				</div>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
			</div>
		</from>
	);
};

export default AddPoemFrom;
