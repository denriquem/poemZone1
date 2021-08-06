import React from "react";
import classes from "./PoemItem.module.css";

const PoemItem = (props) => {
	return (
		<li className={classes.poem}>
			<div>
				<h3>{props.title}</h3>
				<div className={classes.description}>{props.text}</div>
			</div>
		</li>
	);
};

export default PoemItem;
