import React, {useState} from 'react';
import {addTodo} from '../../helpers/db';

const Form = () => {

    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if(text.length === 0) return;
        addTodo(text).catch(console.log);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type your task" id="todoInput" value={text} onChange={e => setText(e.target.value)} />
        </form>
    )
}

export default Form;