import React from 'react';
import styles from '../css/TodoList.module.css';
import TodoItem from './TodoItem.js'
import {useTodoState} from '../TodoContext.js';

function TodoList(){
	const todos = useTodoState();
	return (
		<div className={styles.TodoList}>
			{todos.map(todo =>(
			<TodoItem
				key ={todo.id}
				id={todo.id}
				text={todo.text}
				done={todo.done}
				/>))}
		</div>
	)
}
export default TodoList;