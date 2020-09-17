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

    return (
        <ul className="list">
            {
                tasks.map(task => <li onClick={() => handleClick(task)} key={task.id} className={`task ${task.completed ? 'complete' : ''}`}>{task.task}<span onClick={e => handleDelete(e, task)}>X</span></li>)
            }
        </ul>
    )
}

export default TaskList;