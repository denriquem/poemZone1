import Modal from "../UI/Modal";
import { useState } from "react";
import classes from "./AddPoem.module.css";
import AddPoemFrom from "./AddPoemForm";

const AddPoem = (props) => {
	const submitPoemHandler = (formData) => {
		fetch(
			"https://poemzone-176fa-default-rtdb.europe-west1.firebasedatabase.app/poems.json",
			{
				method: "POST",
				body: JSON.stringify(formData),
			}
		);
	};

	const modalActions = (
		<div className={classes.actions}>
			<button className={classes["button--alt"]} onClick={props.onClose}>
				Close
			</button>
		</div>
	);

	return (
		<Modal onClose={props.onClose}>
			<AddPoemFrom onCancel={props.onClose} onConfirm={submitPoemHandler} />
			{modalActions}
		</Modal>
	);
};

export default AddPoem;
