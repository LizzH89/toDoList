import React, { useState } from "react";
import PropTypes from "prop-types";

import { Form } from "./Form";
import { Todo } from "./home";

//en esta function voy a hacer
export function ToDoList() {
	const [todos, setTodos] = useState([]);
	const addTodo = todo => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		const newTodos = [todo, ...todos];
		setTodos(newTodos);
		console.log(todo);
	};

	const removeTodo = id => {
		const removedArr = [...todos].filter(todo => todo.id !== id);
		setTodos(removedArr);
	};

	const completedTodo = id => {
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.isCompleted = !todo.isCompleted;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<div className="formato">
			<h1>todos</h1>
			<Form onSubmit={addTodo} />
			<Todo
				todos={todos}
				completedTodo={completedTodo}
				removeTodo={removeTodo}
			/>
		</div>
	);
}
