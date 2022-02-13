import React from "react";
import Todo from "./Todo";

function ListTodo({dispatch, todoList}) {
    console.log(todoList)

    return (
        <div>
            <h1>To-Do</h1>
            {todoList.filter(todo => todo.completed === false).map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
            })}
            <br/>
            <h1>Completed</h1>
            {todoList.filter(todo => todo.completed === true).map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
            })}
        </div>
    );
}

export default ListTodo;