import React, { useState } from 'react';
import Checkbox from './Checkbox';
import TaskInfo from './TaskInfo';
import EditInputs from './EditInputs';
import { EditButton, DeleteButton, SaveButton, CancelButton } from './Button';
import styles from './TodoItem.module.css';

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

    const isDeadlineClosest = () => {
        const currentDate = new Date().setHours(0, 0, 0, 0);
        const deadlineDate = new Date(task.deadline).setHours(0, 0, 0, 0);
        const timeDifference = deadlineDate - currentDate;
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

        return daysDifference >= 0 && daysDifference < 3;
    };

    const isDeadlineOverdue = () => {
        const currentDate = new Date().setHours(0, 0, 0, 0);
        const deadlineDate = new Date(task.deadline).setHours(0, 0, 0, 0);

        return currentDate > deadlineDate;
    };

    return (
        <div
            className={`${styles.todoItem} ${
                isDeadlineClosest() ? styles.closestDeadline : ''
            } ${isDeadlineOverdue() ? styles.overdueDeadline : ''}`}
        >
            <Checkbox checked={task.completed} onChange={handleCheckboxChange} />

            {!editMode ? (
                <TaskInfo task={task} />
            ) : (
                <EditInputs
                    editedName={editedName}
                    editedDeadline={editedDeadline}
                    handleEditedNameChange={handleEditedNameChange}
                    handleEditedDeadlineChange={handleEditedDeadlineChange}
                    handleKeyDown={handleKeyDown}
                />
            )}

            {!editMode ? (
                <div>
                    <EditButton handleEditClick={handleEditClick} disabled={task.completed} />
                    <DeleteButton handleDeleteClick={handleDeleteClick} />
                </div>
            ) : (
                <div>
                    <SaveButton handleSaveEdit={handleSaveEdit} />
                    <CancelButton handleCancelEdit={handleCancelEdit} />
                </div>
            )}
        </div>
    );
};

export default TodoItem;
