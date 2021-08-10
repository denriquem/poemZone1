import React from "react";
import classes from "./Poems.module.css";
import Card from "./UI/Card";
import PoemItem from "./PoemItem";

const poems = [
	{
		id: "p1",
		title: "Blizzard",
		author: "William Carlos Williams",
		text: `Snow: \n
    years of anger following \n
    hours that float idly down \n —
    the blizzard \n
    drifts its weight \n
    deeper and deeper for three days \n
    or sixty years, eh? Then \n
    the sun! a clutter of \n
    yellow and blue flakes — \n
    Hairy looking trees stand out \n
    in long alleys \n
    over a wild solitude. \n
    The man turns and there — \n
    his solitary track stretched out \n
    upon the world.`,
	},
	{
		id: "p2",
		title: "Days",
		author: "Phillip Larkin",
		text: `What are days for? \n
        Days are where we live. \n   
        They come, they wake us \n   
        Time and time over. \n
        They are to be happy in: \n  
        Where can we live but days? \n
        
        Ah, solving that question \n
        Brings the priest and the doctor \n   
        In their long coats \n
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

const Poems = (props) => {
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
