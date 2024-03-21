import { useState, useEffect } from "react";

import "./App.css";
import Input from "./Components/Input";
import List from "./Components/List";

function App() {
	// const todos = ["laundry", "grocery shop", "clean car"];
	const [action, setAction] = useState("");
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		console.log("mount");
	}, [setTodoList]);

	function submitAction(event) {
		event.preventDefault();
		console.log(action);
		setAction("");
		setTodoList([...todoList, action]);
	}

	const deleteAction = (value) => {
		setTodoList((oldValues) => {
			return oldValues.filter((action) => action !== value);
		});
	};
	return (
		<div className="App">
			<h1>Welcome to the code-along!</h1>
			<h2>TODO List maker</h2>
			<Input
				submitAction={submitAction}
				action={action}
				setAction={setAction}
			/>
			<List todos={todoList} deleteAction={deleteAction} />
		</div>
	);
}

export default App;
