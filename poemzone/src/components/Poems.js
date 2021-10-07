import React, { useState, useEffect } from "react";
import classes from "./Poems.module.css";
import Card from "./UI/Card";
import PoemItem from "./PoemItem";

const Poems = (props) => {
	console.log("hello");
	const [poems, setPoems] = useState([]);

	useEffect(() => {
		const fetchPoems = async () => {
			const response = await fetch(
				"https://poemzone-176fa-default-rtdb.europe-west1.firebasedatabase.app/poems.json"
			).then();

			console.log(response);

			if (!response.ok) {
				throw new Error("Something went wrong");
			}

			const responseData = await response.json();

			const loadedPoems = [];

			for (const key in responseData) {
				loadedPoems.push({
					id: key,
					title: responseData[key].title,
					author: responseData[key].author,
					text: responseData[key].poem,
				});
			}
			setPoems(loadedPoems);
		};

		fetchPoems().catch((error) => {
			throw new Error(error);
		});

		console.log(poems);
	}, []);

	const poemsList = poems.map((poem) => {
		return (
			<PoemItem
				id={poem.id}
				key={poem.id}
				title={poem.title}
				text={poem.text}
				author={poem.author}
			/>
		);
	});

	return (
		<section className={classes.poems}>
			<button className={classes.buttonPosition} onClick={props.onShowAddPoem}>
				Add Poem
			</button>
			<Card>
				<ul>{poemsList}</ul>
			</Card>
		</section>
	);
};

export default Poems;
