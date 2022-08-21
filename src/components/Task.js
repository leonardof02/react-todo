import React, { useState } from "react";
import './Task.css';
import '../General.css'

export default function Task( { id, title, desc, isChecked, onEdit, onDelete }) {

    // State
    const [ currentId, setCurrentId ] = useState(id);
    const [ info, setInfo ] = useState({ title: title, desc: desc })
    const [ checked, setChecked ] = useState( isChecked );
    const [ editMode, setEditMode ] = useState( false );

    // EVENTS
    const handleChange = ( e ) => {
        e.target.className === "task-title" ?
        setInfo({ title: e.target.value, desc: info.desc })
        : setInfo({ title: info.title, desc: e.target.value })
    }

    const toggleEditMode = () => {
        setEditMode( ! editMode );
    }

    const handleCheck = () => {
        checked ? setChecked( false ) : setChecked( true );
    }

    const handleClick = ( e ) => {
        toggleEditMode();
        onEdit( currentId );
    }

    const handleDelete = ( e ) => {
        console.log( currentId );
        onDelete( currentId );
    }

    // RENDER
    if( editMode ) {
        return(
            <div className="task edit-task" onChange={ handleChange }>
                <input type="checkbox" onChange={ handleCheck } ></input>
                <input type="text" value={ info.title } className="task-title"></input>
                <input type="text" value={ info.desc } className="task-desc"></input>
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