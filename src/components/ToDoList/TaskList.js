import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import modules from './TodoList.module.css'

const TaskList = ({
                      tasks,
                      onTaskCheckboxChange,
                      onTaskEdit,
                      onTaskDelete,
                  }) => {
    return (
        <div className={modules.taskList}>
            {tasks.map((task, index) => (
                <TodoItem
                    key={index}
                    id={index}
                    task={task}
                    onCheckboxChange={onTaskCheckboxChange}
                    onEdit={onTaskEdit}
                    onDelete={onTaskDelete}
                />
            ))}
        </div>
    );
};

export default TaskList;
