import { useState } from "react"

export default function TaskForm({ onSubmit }) {

    const [ title, setTitle ] = useState("");
    const [ desc, setDesc ] = useState("");

    const handleSubmit = ( e ) => {
        e.preventDefault();
        onSubmit( title, desc );
    }

    const handleChange = ( e ) => {
        e.target.className === "input-title" ?
        setTitle( e.target.value )
        : setDesc( e.target.value );
    }

    return(
        <form onSubmit={ handleSubmit } onChange={ handleChange }>
            <input className="input-title"></input>
            <input className="input-description"></input>
            <button type="submit" name="Add Task">Add task</button>
        </form>
    )
}