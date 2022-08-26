import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import './ToDo.css'
import '../General.css'

export default function ToDo( { id, title, desc, completed, createdAt, onChange, onClick, onUpdate } ) {
    const [ isCompleted, toggleCompleted ] = useState(completed);
    const [ editMode, toggleEditMode ] = useState(false);

    let todoType;
    isCompleted ? todoType = "task task-completed" : todoType = "task";

    const handleChange = ( event ) => {
        toggleCompleted(!isCompleted);
        onChange( id );
    }

    const handleClick = ( event ) => {
        if( event.target.id === "delete" )
            onClick( id );
        if( event.target.id === "edit" )
            toggleEditMode( mode => !mode );
    }

    const changeEditMode = () => {
        toggleEditMode( !editMode );
    }

    if( editMode ) {
        return (
            <EditTodoForm
                id={ id }
                onClick={ onUpdate }
                title={ title }
                desc={ desc }
                onCancel={ changeEditMode }
            />
        )
    }
    
    else {
        return (
            <div className={todoType}>
                <input className="check-todo" type="checkbox" value={ completed } onChange={ handleChange }></input>
                <h3 className="todo-title">{ title }</h3>
                <p className="todo-desc">{ desc }</p>
                <footer> { createdAt } </footer>
                <button className="btn btn-danger" onClick={ handleClick } id="delete">Delete</button>
                <button  className="btn btn-primary" onClick={ handleClick } id="edit">Edit</button>
            </div>
        )
    }
}