import React from 'react';
import '../todo.css';
import {ACTIONS} from "../actions";

function Todo({todo, dispatch}) {

    return (
        <div>
            <div className="TodoItem">
                <p>{todo.title}</p>
                <button onClick={() => dispatch({
                    type: ACTIONS.REMOVE_TODO,
                    payload: {id: todo.id}
                })} className="TodoRemoveButon">Remove
                </button>
                {!todo.completed && <button onClick={() => dispatch({
                    type: ACTIONS.COMPLETE_TODO,
                    payload: todo.id
                })}>Complete</button>}
                <br/>
            </div>
            <br/>
        </div>
    );
}

export default Todo;