import { useState } from "react"
import "./EditTodoForm.css"

export default function EditTodoForm({ id, title, desc, onClick, onCancel }) {

    const [ data, setData ] = useState({
        title: title,
        desc: desc
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();
        onClick( id, data.title, data.desc );
        onCancel();
    }

    const handleClick = () => {
        onCancel();
    }

    const handleChange = ( e ) => {
        const changeValue = { [e.target.name]: e.target.value };
        setData( prevData => {
            return { ...prevData, ...changeValue }
        } )
    }

    return(
        <form  className="task edit-todo-form" onSubmit={ handleSubmit } onChange={ handleChange }>
            <label for="todo-title">Title:</label>
            <input className="todo-title" type="text" name="title" defaultValue={ title } />
            <label for="todo-desc">Description:</label>
            <input className="todo-desc" type="text" name="desc" defaultValue={ desc }/>
            <button className="btn btn-danger" onClick={ handleClick }>Cancel</button>
            <input className="btn btn-success" type="submit" value="Accept"></input>
        </form>
    )
}