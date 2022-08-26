import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import './ToDo.css'
import '../General.css'

export default function ToDo( { id, title, desc, completed, createdAt, onChange, onClick, onUpdate } ) {
    const [ isCompleted, toggleCompleted ] = useState(completed);
    const [ editMode, toggleEditMode ] = useState(false);

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
            <div className="task">
                <input type="checkbox" value={ completed } onChange={ handleChange }></input>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <footer> createdAt: { createdAt } </footer>
                <button onClick={ handleClick } id="delete">Delete</button>
                <button onClick={ handleClick } id="edit">Edit</button>
            </div>
        )
    }
}