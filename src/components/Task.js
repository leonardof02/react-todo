import React, { useState } from "react";
import './Task.css';
import '../General.css'

export default function Task( { id, title, desc, isChecked, onEdit, onDelete }) {

    // State
    const [ info, setInfo ] = useState({ title: title, desc: desc })
    const [ checked, setChecked ] = useState( isChecked );
    const [ editMode, setEditMode ] = useState( false );

    // EVENTS
    const handleChange = ( e ) => {
        
    }

    const toggleEditMode = () => {
        setEditMode( ! editMode );
    }

    const handleCheck = () => {
        checked ? setChecked( false ) : setChecked( true );
    }

    const handleClick = ( e ) => {
        toggleEditMode();
        onEdit( id );
    }

    const handleDelete = ( e ) => {
        onDelete( id );
    }

    // RENDER
    if( editMode ) {
        return(
            <div className="task edit-task" onChange={ handleChange }>
                <input type="checkbox" onChange={ handleCheck } ></input>
                <input type="text" placeholder={ info.title } name="title"></input>
                <input type="text" placeholder={ info.desc  } name="desc" ></input>
                <button className='btn btn-success' onClick={ handleClick }>
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
                <input type="checkbox" onChange={ handleCheck } checked={ checked }></input>
                <h1>{ info.title }</h1>
                <p>{ info.desc }</p>
                <button className='btn btn-primary' onClick={ toggleEditMode }>
                    Edit
                </button>
                <button className='btn btn-danger' onClick={ handleDelete }>
                    Delete
                </button>
            </div>
        )
    }
}