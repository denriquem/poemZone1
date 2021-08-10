import React from "react";
import classes from "./AddPoemForm.module.css";

const AddPoemFrom = (props) => {
	const confirmHandler = (event) => {
		event.preventDefault();
	};

	return (
		<from onSubmit={confirmHandler}>
			<div className={classes.control}>
				<label htmlFor="title">The Title</label>
				<input type="text" id="title"></input>
				<div className={classes.control}>
					<label htmlFor="author">Author</label>
					<input type="text" id="author"></input>
				</div>
				<div className={classes.control}>
					<label htmlFor="poem">Poem</label>
					<textarea id="poem" name="poem"></textarea>
				</div>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
			</div>
		</from>
	);
};

export default AddPoemFrom;
