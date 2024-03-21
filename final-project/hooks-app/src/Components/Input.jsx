import "./toDoList.css";

export default function Input() {
	return (
		<div className="Input">
			<input
				type="text"
				className="input_box"
				// value={}
				// onChange={}
			/>
			<button type="submit">Submit</button>
		</div>
	);
}
