import "./toDoList.css";
import React from "react";

export default function Input({ todos, deleteAction }) {
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
