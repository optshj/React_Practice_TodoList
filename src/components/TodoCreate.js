import React, { useState, useEffect } from 'react';
import styles from '../css/TodoCreate.module.css';
import { MdAdd } from 'react-icons/md';
import {useTodoDispatch,useTodoNextId} from '../TodoContext.js';
import TodoWarn from './TodoWarn.js';

function TodoCreate(){
	const [open,setOpen] = useState(false);
	const [value,setValue] = useState('');
	
	const dispatch = useTodoDispatch();
	const nextId = useTodoNextId();
	
	const onToggle = () => setOpen(!open)
	const onChange = e => setValue(e.target.value);
	const onSubmit = e => {
		e.preventDefault();
		if (value){
			dispatch({
			type:"CREATE",
			todo:{
				id:nextId.current,
				text:value,
				done:false
			}
		});
		setValue('');
		setOpen(false);
		nextId.current += 1 ;
		}
	}

	
	
	
	return(
	<div>
			{open &&(
			<form onSubmit={onSubmit}>
				<div className={styles.InsertForm} >
					<input autoFocus placeholder= "할 일을 입력 후, Enter 를 누르세요" onChange={onChange} value = {value}/>
					<TodoWarn value = {value}/>
				 </div>
			</form>)
			}
			<div open = {open}onClick={onToggle} className={open ? styles.CircleBtnActive : styles.CircleBtn}><MdAdd/></div>
	</div>
	)
}
export default React.memo(TodoCreate);
