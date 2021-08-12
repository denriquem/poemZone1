import Modal from "../UI/Modal";
import { useState } from "react";
import classes from "./AddPoem.module.css";
import AddPoemFrom from "./AddPoemForm";

const AddPoem = (props) => {
	const [formData, setFormData] = useState({});

	const saveFormData = (formData) => {
		const formInput = {
			...formData,
		};
		setFormData(formInput);
	};

	const testFormData = () => {
		console.log(formData);
		console.log(`Here it is baby ${formData}`);
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
			<AddPoemFrom onCancel={props.onClose} onSaveFormData={saveFormData} />
			{modalActions}
		</Modal>
	);
};

export default AddPoem;
