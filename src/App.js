import React, { Component } from 'react';
import styles from "./css/App.module.css";
import TodoTemplate from './components/TodoTemplate.js';
import TodoHead from './components/TodoHead.js';
import TodoList from './components/TodoList.js';
import TodoCreate from './components/TodoCreate.js';
import {TodoProvider} from './TodoContext.js';

function App(){
	return(
		<TodoProvider>
			<div className={styles.App}>
				<TodoTemplate>
					<TodoHead/>
					<TodoList/>
					<TodoCreate/>
				</TodoTemplate>
			</div>
		</TodoProvider>
			
	);
}

export default App;
