import React, {useEffect, useReducer} from "react";
import AddTodo from "../components/AddTodo";
import ListTodo from "../components/ListTodo";
import {ACTIONS} from "../actions";
import axios from 'axios';

function newTodo(text) {
    return {id: Date.now(), title: text, completed: false}
}

function loadTodo(todo) {
    return {id: todo.id, title: todo.title, completed: todo.completed}
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload)]
        case ACTIONS.COMPLETE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        case ACTIONS.REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload.id)
        case ACTIONS.LOAD_TODO:
            return [...state, ...action.payload.map(todo => loadTodo(todo))]
        default:
            return state
    }
}

function TodoContainer() {
    const [todoList, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        async function loadTodo() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            dispatch({type: ACTIONS.LOAD_TODO, payload: response.data})
        }
        loadTodo();
    }, [])

    return (
        <div>
            <AddTodo dispatch={dispatch} todoList={todoList}/>
            <br/>
            <ListTodo dispatch={dispatch} todoList={todoList}/>
        </div>
    );
}

export default TodoContainer;