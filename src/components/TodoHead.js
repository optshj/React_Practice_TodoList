import React from 'react';
import styles from '../css/TodoHead.module.css';
import {useTodoState} from '../TodoContext.js';


function TodoHead(){
  	const todos = useTodoState();
	const undoneTasks = todos.filter(todo => !todos.done);
	
	const today = new Date();
	const dateString = today.toLocaleDateString('ko-KR',{
		year : 'numeric',
		month :'long',
		day:'numeric'
	});
	const dayName = today.toLocaleDateString('ko-kr',{weekday:'long'});
	
	
	return(
		<div className={styles.TodoHead}>
			<div className={styles.Date}>{dateString}</div>
			<div className={styles.Day}>{dayName}</div>
			<div className={styles.Left}>할 일 {undoneTasks.length}개 남음</div>
		</div>
	)
}
export default TodoHead;