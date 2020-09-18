import React, {useState, useEffect} from 'react';
import {tasksStream, updateTodo, deleteTodo} from '../../helpers/db';

const TaskList = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        tasksStream().onSnapshot(qs => {
            let arr = [];
            qs.forEach(doc => arr.push(doc.data()));
            setTasks(arr);
        })
    }, []);

    const handleClick = task => {
        task.toggleTask();
        updateTodo(task);
    };

    const handleDelete = (e, task) => {
        e.stopPropagation();
        deleteTodo(task);
    };

    const renderTaskItem = (task) => {
    return <li onClick={() => handleClick(task)} key={task.id} className={`task ${task.completed ? 'complete' : ''}`}><i className={`customCheckBox ${task.completed ? 'fas fa-check-square' : "far fa-square"}`}></i> {task.task}<span onClick={e => handleDelete(e, task)}>X</span></li>
    }

    return (
        <ul className="list">
            {
                tasks.map(renderTaskItem)
            }
        </ul>
    )
}

export default TaskList;