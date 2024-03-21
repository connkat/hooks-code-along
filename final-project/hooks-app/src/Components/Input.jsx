import "./toDoList.css";

export default function Input({ submitAction, action, setAction }) {
	return (
		<div className="Input">
			<form onSubmit={submitAction}>
				<input
					type="text"
					className="input_box"
					value={action}
					onChange={(e) => {
						setAction(e.target.value);
					}}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
