import React, {useReducer} from "react";
import AddTodo from "../components/AddTodo";
import ListTodo from "../components/ListTodo";
import {ACTIONS} from "../actions";

function newTodo(text) {
    return {id: Date.now(), title: text, completed: false};
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
        default:
            return state
    }
}

function TodoContainer() {
    const [todoList, dispatch] = useReducer(reducer, []);

    return (
        <div>
            <AddTodo dispatch={dispatch} todoList={todoList}/>
            <br/>
            <ListTodo dispatch={dispatch} todoList={todoList}/>
        </div>
    );
}

export default TodoContainer;