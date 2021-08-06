import React from "react";
import classes from "./Poems.module.css";
import Card from "./UI/Card";
import PoemItem from "./PoemItem";

const poems = [
	{
		id: "p1",
		title: "Blizzard",
		author: "William Carlos Williams",
		text: `Snow:
    years of anger following
    hours that float idly down —
    the blizzard
    drifts its weight
    deeper and deeper for three days
    or sixty years, eh? Then
    the sun! a clutter of
    yellow and blue flakes —
    Hairy looking trees stand out
    in long alleys
    over a wild solitude.
    The man turns and there —
    his solitary track stretched out
    upon the world.`,
	},
	{
		id: "p2",
		title: "Days",
		author: "Phillip Larkin",
		text: `What are days for?
        Days are where we live.   
        They come, they wake us   
        Time and time over.
        They are to be happy in:   
        Where can we live but days?
        
        Ah, solving that question
        Brings the priest and the doctor   
        In their long coats
        Running over the fields.`,
	},
];

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

const Poems = () => {
	return (
		<section className={classes.poems}>
			<Card>
				<ul>{poemsList}</ul>
			</Card>
		</section>
	);
};

export default Poems;
