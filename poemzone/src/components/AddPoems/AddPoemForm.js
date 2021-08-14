import React, { useState } from "react";
import classes from "./AddPoemForm.module.css";

const AddPoemFrom = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");
	const [enteredPoem, setEnteredPoem] = useState("");

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const authorChangeHandler = (event) => {
		setEnteredAuthor(event.target.value);
	};

	const poemChangeHandler = (event) => {
		setEnteredPoem(event.target.value);
	};

	const submitHandler = (event) => {
		const formData = {
			title: enteredTitle,
			author: enteredAuthor,
			poem: enteredPoem,
		};

		console.log(formData);
		props.onConfirm(formData);
	};

	return (
		<from onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="title">The Title</label>
				<input type="text" id="title" onChange={titleChangeHandler}></input>
				<div className={classes.control}>
					<label htmlFor="author">Author</label>
					<input type="text" id="author" onChange={authorChangeHandler}></input>
				</div>
				<div className={classes.control}>
					<label htmlFor="poem">Poem</label>
					<textarea
						id="poem"
						name="poem"
						onChange={poemChangeHandler}
					></textarea>
				</div>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit" value="submit" onClick={submitHandler}>
					Submit
				</button>
			</div>
		</from>
	);
};

export default AddPoemFrom;
