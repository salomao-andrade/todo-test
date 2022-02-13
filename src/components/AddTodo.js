import {useState} from "react";
import {ACTIONS} from "../actions";

function AddTodo({dispatch, todoList}) {
    const [todoTitle, setTodoTitle] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        if (todoTitle) {
            dispatch({type: ACTIONS.ADD_TODO, payload: todoTitle})
            setTodoTitle('')
        }
    }

    return (<div>
        <div>
            <br/>
            <form onSubmit={handleSubmit}>
                <input id="todoText" type="text" value={todoTitle} onChange={(event => setTodoTitle(event.target.value))}/>
                <button type="submit">Add item</button>
            </form>
            <br/>
        </div>
    </div>);
}

export default AddTodo;
