import React from 'react';
import Form from './form';
import TaskList from './TaskList';

const Container = () => {

    return (
        <div className="form">
            <Form />
            <TaskList />
        </div>
    );
}

export default Container;