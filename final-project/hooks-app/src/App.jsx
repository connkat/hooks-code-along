import "./App.css";
import Input from "./Components/Input";
import List from "./Components/List";

function App() {
	const todos = ["laundry", "grocery shop", "clean car"];
	return (
		<div className="App">
			<h1>Welcome to the code-along!</h1>
			<h2>TODO List maker</h2>
			<Input />
			<List todos={todos} />
		</div>
	);
}

export default App;
