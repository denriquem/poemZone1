import { Fragment } from "react";
import classes from "./Header.module.css";
import blake from "../assets/blake.jpeg";

const Header = () => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>poemZone</h1>
			</header>
			<div className={classes["main-image"]}>
				<img src={blake} alt="its william baby" />
			</div>
		</Fragment>
	);
};

export default Header;
