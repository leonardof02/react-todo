import { useState } from "react"

export default function EditTodoForm({ id, title, desc, onClick, onCancel }) {

    const [ data, setData ] = useState({
        title: "",
        desc: ""
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
        <form onSubmit={ handleSubmit } onChange={ handleChange }>
            <input type="text" name="title" defaultValue={ title } />
            <input type="text" name="desc" defaultValue={ desc }/>
            <button onClick={ handleClick }>Cancel</button>
            <input type="submit" name="Accept"></input>
        </form>
    )
}