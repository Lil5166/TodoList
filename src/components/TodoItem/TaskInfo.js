import React from 'react';
import styles from './TodoItem.module.css';

const TaskInfo = ({ task }) => {
    return (
        <div className={styles.taskInfo}>
            <div>
        <span className={task.completed ? styles.completed : ''}>
          {task.name}
        </span>
            </div>
            <div>
        <span className={task.completed ? styles.completed : ''}>
          {task.deadline}
        </span>
            </div>
        </div>
    );
};

export default TaskInfo;
