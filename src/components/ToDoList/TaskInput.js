import React, {useState} from 'react';
import modules from './TodoList.module.css'

const TaskInput = ({onAddTask}) => {
    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleTaskDeadlineChange = (e) => {
        setTaskDeadline(e.target.value);
    };

    const handleAddTask = () => {
        if (taskName.trim() !== '' && taskDeadline.trim() !== '') {
            const newTask = {
                name: taskName,
                deadline: taskDeadline,
                completed: false,
            };
            onAddTask(newTask);
            setTaskName('');
            setTaskDeadline('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div className={modules.inputContainer}>
            <input
                type="text"
                value={taskName}
                onChange={handleTaskNameChange}
                onKeyDown={handleKeyDown}
                placeholder="Назва задачі"
            />
            <input
                type="date"
                value={taskDeadline}
                onChange={handleTaskDeadlineChange}
                onKeyDown={handleKeyDown}
                placeholder="Дедлайн"
            />
            <button onClick={handleAddTask}>Додати задачу</button>
        </div>
    );
};

export default TaskInput;
