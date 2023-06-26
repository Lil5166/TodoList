import React from 'react';
import styles from './TodoList.module.css'

const SearchInput = ({searchTerm, onSearchTermChange}) => {
    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                value={searchTerm}
                onChange={onSearchTermChange}
                placeholder="Пошук за назвою"
            />
        </div>
    );
};

export default SearchInput;
