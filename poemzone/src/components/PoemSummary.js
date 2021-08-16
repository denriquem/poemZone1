import classes from "./PoemSummary.module.css";

const PoemSummary = () => {
	return (
		<section className={classes.summary}>
			<h2>Poems If You Like Poems</h2>
			<p>Enjoy browsing through our collection of poems.</p>
			<p>
				Feel free to add any scriblings of your own and become immortalised in
				the undying repository of verse.
			</p>
		</section>
	);
};

export default PoemSummary;
