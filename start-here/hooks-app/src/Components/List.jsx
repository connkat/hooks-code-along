import "./toDoList.css";

export default function Input({ todos }) {
	console.log(todos);
	return (
		<div className="List">
			<ul>
				{todos.map((todo) => (
					<li key={todo}>{todo}</li>
				))}
			</ul>
		</div>
	);
}
