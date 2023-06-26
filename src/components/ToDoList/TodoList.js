import React, {useState} from 'react';
import TodoHeader from './TodoHeader';
import TaskInput from './TaskInput';
import SearchInput from './SearchInput';
import TaskList from './TaskList';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
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
                    deadline: newDeadline,
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

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredTasks = tasks.filter((task) =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <TodoHeader/>
            <TaskInput onAddTask={handleAddTask}/>
            <SearchInput
                searchTerm={searchTerm}
                onSearchTermChange={handleSearchTermChange}
            />
            <TaskList
                tasks={filteredTasks}
                onTaskCheckboxChange={handleTaskCheckboxChange}
                onTaskEdit={handleTaskEdit}
                onTaskDelete={handleTaskDelete}
            />
        </div>
    );
};

export default TodoList;
