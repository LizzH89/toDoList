import React, { useState } from "react";
import PropTypes from "prop-types";

//import { ToDoList } from "./component/ToDoList";
import { Form } from "./Form";
import { ToDoList } from "./ToDoList";
import { RiCloseCircleLine } from "react-icons/ri";

//create your first component

export function Todo({ todos, completedTodo, removeTodo }) {
	return todos.map((todo, index) => (
		<div
			className={todo.isComplete ? "todo-row compleated" : "todo-row"}
			key={index}>
			<div key={todo.id} onClick={() => completedTodo(todo.id)}>
				{todo.text}
			</div>
			<div clasName="icons">
				<RiCloseCircleLine
					color="red"
					onClick={() => removeTodo(todo.id)}
					clasName="delete-icon "
				/>
			</div>
		</div>
	));
}

export function Home() {
	return (
		<div>
			<ToDoList />
		</div>
	);
}
