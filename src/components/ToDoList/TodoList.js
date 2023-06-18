import React, { useState } from 'react';
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [taskDeadline, setTaskDeadline] = useState("");

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleTaskDeadlineChange = (e) => {
        setTaskDeadline(e.target.value);
    };

    const handleAddTask = () => {
        if (taskName.trim() !== "" && taskDeadline.trim() !== "") {
            const newTask = {
                name: taskName,
                deadline: taskDeadline,
                completed: false
            };
            setTasks([...tasks, newTask]);
            setTaskName("");
            setTaskDeadline("");
        }
    };

    const handleTaskCheckboxChange = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const handleTaskEdit = (index, newName, newDeadline) => {
        const updatedTasks = tasks.map((task, taskIndex) => {
            if (taskIndex === index) {
                return {
                    ...task,
                    name: newName,
                    deadline: newDeadline
                };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleTaskDelete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div className="input-container">
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
            <div className="task-list">
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        id={index}
                        task={task}
                        onCheckboxChange={handleTaskCheckboxChange}
                        onEdit={handleTaskEdit}
                        onDelete={handleTaskDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
