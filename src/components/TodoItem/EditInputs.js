import React from 'react';
import modules from './TodoItem.module.css'

const EditInputs = ({
                        editedName,
                        editedDeadline,
                        handleEditedNameChange,
                        handleEditedDeadlineChange,
                        handleKeyDown
                    }) => {
    return (
        <div className={modules.editInputs}>
            <input
                type="text"
                value={editedName}
                onChange={handleEditedNameChange}
                onKeyDown={handleKeyDown}
                className={modules.editInput}
            />
            <input
                type="date"
                value={editedDeadline}
                onChange={handleEditedDeadlineChange}
                onKeyDown={handleKeyDown}
                className={modules.editInput}
            />
        </div>
    );
};

export default EditInputs;
