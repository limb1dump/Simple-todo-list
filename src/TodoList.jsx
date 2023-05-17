import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {

    return (

        <ul className='list'>
            {todos.length === 0 && 'No todos'}
            {todos.map(todo => {
                return (
                    <TodoItem {...todo} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
                )
            })}

        </ul>

    );
};

export default TodoList;