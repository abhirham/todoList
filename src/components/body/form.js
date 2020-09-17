import React, {useState} from 'react';
import {addTodo} from '../../helpers/db';

const Form = () => {

    const [text, setText] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        if(text.length === 0) return;
        try {
            await addTodo(text);
        } catch(e) {
            console.log(e);
        }
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type your task" id="todoInput" value={text} onChange={e => setText(e.target.value)} />
        </form>
    )
}

export default Form;