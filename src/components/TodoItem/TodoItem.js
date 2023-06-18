import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ id, task, onCheckboxChange, onEdit, onDelete }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedName, setEditedName] = useState(task.name);
    const [editedDeadline, setEditedDeadline] = useState(task.deadline);

    const handleCheckboxChange = () => {
        onCheckboxChange(id);
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveEdit = () => {
        onEdit(id, editedName, editedDeadline);
        setEditMode(false);
    };

    const handleCancelEdit = () => {
        setEditMode(false);
        setEditedName(task.name);
        setEditedDeadline(task.deadline);
    };

    const handleDeleteClick = () => {
        onDelete(id);
    };

    const handleEditedNameChange = (e) => {
        setEditedName(e.target.value);
    };

    const handleEditedDeadlineChange = (e) => {
        setEditedDeadline(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSaveEdit();
        }
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleCheckboxChange}
            />
            {!editMode ? (
                <div className="task-info">
                    <div>
            <span className={task.completed ? 'completed' : ''}>
              {task.name}
            </span>
                    </div>
                    <div>
            <span className={task.completed ? 'completed' : ''}>
              {task.deadline}
            </span>
                    </div>
                </div>
            ) : (
                <div className="edit-inputs">
                    <input
                        type="text"
                        value={editedName}
                        onChange={handleEditedNameChange}
                        onKeyDown={handleKeyDown}
                        className="edit-input"
                    />
                    <input
                        type="date"
                        value={editedDeadline}
                        onChange={handleEditedDeadlineChange}
                        onKeyDown={handleKeyDown}
                        className="edit-input"
                    />
                </div>
            )}
            {!editMode ? (
                <div>
                    <button
                        onClick={handleEditClick}
                        disabled={task.completed}
                        className="edit-button"
                    >
                        Змінити
                    </button>
                    <button onClick={handleDeleteClick} className="delete-button">
                        Видалити
                    </button>
                </div>
            ) : (
                <div>
                    <button onClick={handleSaveEdit} className="save-button">
                        Зберегти
                    </button>
                    <button onClick={handleCancelEdit} className="cancel-button">
                        Скасувати
                    </button>
                </div>
            )}
        </div>
    );
};

export default TodoItem;