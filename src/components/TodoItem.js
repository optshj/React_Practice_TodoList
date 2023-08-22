import React, { useState} from 'react';
import styles from '../css/TodoItem.module.css';
import { MdDone, MdDelete } from 'react-icons/md';
import { AiOutlineCheck , AiOutlineClose,AiFillEdit } from "react-icons/ai";
import {useTodoDispatch,useTodoNextId} from '../TodoContext.js';

function TodoItem({id,text,done}){
	const dispatch = useTodoDispatch();
	const onToggle = () => dispatch({type:"TOGGLE",id});
	const onRemove = () => dispatch({type:"REMOVE",id});
	
	const [value,setValue] = useState(text);
	const [edit,setEdit] = useState(false);
	const onModify = () => {
		setValue('');
		setEdit(true);
	}
	const onCancel = () => {
		setValue(text);
		setEdit(false);
	}
	const onCheck = () => {
		if (value)
		setEdit(false)}
	const onSubmit = e => {
		e.preventDefault();
		if (value){setEdit(false)}
	}
	return(
		<div className={styles.TodoItem}>
			<div done={done} className={done ? styles.CheckCircle : styles.NotCheckCircle} onClick={onToggle}>{done&&<MdDone/>}</div>
			{edit ? (
				<>
				<form onSubmit={onSubmit} className ={styles.Form}>
					<input className = {styles.ModifyInput} autofocus onChange={e => setValue(e.target.value)}/>
				</form>
				<div className={styles.check} onClick={onCheck}><AiOutlineCheck/></div>
				<div className={styles.cancel} onClick={onCancel}><AiOutlineClose/></div>
				</>
				) : (
				<>
					<div className={done ? styles.doneText : styles.Text}>{value}</div>
					<div className={styles.Modify} onClick={onModify}><AiFillEdit/></div>
					<div className={styles.Delete} onClick={onRemove}><MdDelete/></div>
				</>
				)
			 }
		</div>
	)
}

export default React.memo(TodoItem);