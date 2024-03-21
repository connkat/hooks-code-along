import { useEffect, useState } from "react";

import "./toDoList.css";

export default function Timer({ todos }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);
	}, [todos]);
	return (
		<div className="Timer">
			<h1>I've rendered {count} times!</h1>
		</div>
	);
}
