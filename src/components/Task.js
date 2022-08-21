import React, { useState } from "react";
import './Task.css';
import '../General.css'

export default function Task( props ) {

    // State
    const [ title, setTitle ] = useState( props.title );
    const [ description, setDescription ] = useState( props.description ); 
    const [ checked, setChecked ] = useState( false );
    const [ editMode, setEditMode ] = useState( false );

    const updateTitle = ( e ) => {
        setTitle( e.target.value );
    }

    const updateDesc = ( e ) => {
        setDescription( e.target.value );
    }

    const toggleEditMode = () => {
        setEditMode( ! editMode );
    }

    const toggleCompleted = () => {
        setChecked( ! checked );
    }

    if( editMode ) {
        return(
            <div className="task edit-task">
                <input type="checkbox" onChange={ toggleCompleted } ></input>
                <input type="text" value={ title } onChange={ updateTitle }></input>
                <input type="text" value={ description } onChange={ updateDesc }></input>
                <button className='btn btn-success' onClick={ toggleEditMode }>
                    Accept
                </button>
            </div>
        )
    }
    else {

        let className = "task";
        if( checked )
            className += " task-completed";

        return(
            <div className={ className }>
                <input type="checkbox" onChange={ toggleCompleted } ></input>
                <h1>{ title }</h1>
                <p>{ description }</p>
                <button className='btn btn-primary' onClick={ toggleEditMode }>
                    Edit
                </button>
                <button className='btn btn-danger'>
                    Delete
                </button>
            </div>
        )
    }
}