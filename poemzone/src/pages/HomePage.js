import Header from "../components/Header";
import Poems from "../components/Poems";
import AddPoem from "../components/AddPoems/AddPoem";
import { Fragment, useState } from "react";
import PoemSummary from "../components/PoemSummary";

function HomePage() {
	const [addPoemIsShown, setAddPoemIsShown] = useState(false);

	const showAddPoemHandler = () => {
		setAddPoemIsShown(true);
	};

	const hideAddPoemHander = () => {
		setAddPoemIsShown(false);
	};

	return (
		<Fragment>
			{addPoemIsShown && <AddPoem onClose={hideAddPoemHander} />}
			<Header />
			<PoemSummary />
			<Poems onShowAddPoem={showAddPoemHandler} />
		</Fragment>
	);
}

export default HomePage;
