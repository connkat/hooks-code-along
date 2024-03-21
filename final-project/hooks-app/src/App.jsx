import { useState } from "react";

import "./App.css";
import Input from "./Components/Input";
import List from "./Components/List";
import Timer from "./Components/Timer";

function App() {
	const [action, setAction] = useState("");
	const [todoList, setTodoList] = useState([]);

	function submitAction(event) {
		event.preventDefault();
		console.log(action);
		setAction("");
		setTodoList([...todoList, action]);
	}

	return (
		<div className="App">
			<h1>Welcome to the code-along!</h1>
			<h2>TODO List maker</h2>
			<Input
				submitAction={submitAction}
				action={action}
				setAction={setAction}
			/>
			<List todos={todoList} />
			<Timer todos={todoList} />
		</div>
	);
}

export default App;
