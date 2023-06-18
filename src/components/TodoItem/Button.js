import React from 'react';
import styles from './TodoItem.module.css'

export function EditButton({ handleEditClick, disabled }) {
    return (
        <button onClick={handleEditClick} disabled={disabled} className={styles.editButton}>
            Змінити
        </button>
    );
}

export function DeleteButton({ handleDeleteClick }) {
    return (
        <button onClick={handleDeleteClick} className={styles.deleteButton}>
            Видалити
        </button>
    );
}

export function SaveButton({ handleSaveEdit }) {
    return (
        <button onClick={handleSaveEdit} className={styles.saveButton}>
            Зберегти
        </button>
    );
}

export function CancelButton({ handleCancelEdit }) {
    return (
        <button onClick={handleCancelEdit} className={styles.cancelButton}>
            Скасувати
        </button>
    );
}
