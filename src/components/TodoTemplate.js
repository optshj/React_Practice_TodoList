import React from 'react';
import styles from '../css/TodoTemplate.module.css';

function TodoTemplate({children}){
	return <div className={styles.TodoTemplateBlock}>{children}</div>;
}
export default TodoTemplate;