import "./toDoList.css";

export default function Input({ todos }) {
	console.log(todos);
	return (
		<div className="List">
			{todos.map((todo) => (
				<ul>
					<li>{todo}</li>
				</ul>
			))}
		</div>
	);
}
