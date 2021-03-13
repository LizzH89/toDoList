import React, { useState } from "react";
import { Button } from "bootstrap";
import PropTypes from "prop-types";
Form.propTypes = {
	onSubmit: PropTypes.func
};

export function Form(props) {
	const [input, setInput] = useState("");
	const handleChange = e => {
		setInput(e.target.value);
	};
	///voy a hacer la funcion de lo que pasa cuand le doy click

	const handleSubmit = e => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input
		});
		setInput("");
	}; //este es el del handleSubmit

	return (
		<form className="Formulario" onSubmit={handleSubmit}>
			<input
				style={{ width: "60%" }}
				type="text"
				placeholder="What needs to be done?"
				value={input}
				name="text"
				className="listInput"
				onChange={handleChange}
			/>
		</form>
	);
}
