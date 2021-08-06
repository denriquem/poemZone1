import React from "react";
import classes from "./PoemItem.module.css";

const PoemItem = (props) => {
	return (
		<li className={classes.poem}>
			<div>
				<h3>{props.title}</h3>
				<h4> By {props.author}</h4>
				<div className={classes.description}>{props.text}</div>
			</div>
		</li>
	);
};

export default PoemItem;
