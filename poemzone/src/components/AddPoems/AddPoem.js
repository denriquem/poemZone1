import Modal from "../UI/Modal";
import { useState } from "react";
import classes from "./AddPoem.module.css";
import AddPoemFrom from "./AddPoemForm";

const AddPoem = (props) => {
	const [isAddPoem, setAddPoem] = useState(false);

	const addPoemHandler = () => {};

	const modalActions = (
		<div className={classes.actions}>
			<button className={classes["button--alt"]} onClick={props.onClose}>
				Close
			</button>
			<button className={classes.button} onClick={addPoemHandler}>
				Add
			</button>
		</div>
	);

	return (
		<Modal onClose={props.onClose}>
			<AddPoemFrom onCancel={props.onClose} />
			{modalActions}
		</Modal>
	);
};

export default AddPoem;
