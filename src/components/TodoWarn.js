import React from 'react';
import styles from '../css/TodoWarn.module.css';

function TodoWarn({value}) {
	return(
		<div>
			{value ? <div className={styles.Norm}></div> : <div className={styles.Warning}>아무 내용이 입력되지 않았습니다.</div>}
		</div>
		
	)
	
}
export default TodoWarn;