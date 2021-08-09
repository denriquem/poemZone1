import Header from "./components/Header";
import Poems from "./components/Poems";
import AddPoem from "./components/AddPoems/AddPoem";
import { Fragment, useState } from "react";

function App() {
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
			<Poems onShowAddPoem={showAddPoemHandler} />
			Let's get cracking Vamonos!
		</Fragment>
	);
}

export default App;
