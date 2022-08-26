import { useState } from "react"
import "./ToDoForm.css"

export default function ToDoForm({ onSubmit }) {

    const [ data, setData ] = useState({
        title: "",
        desc: ""
    });

    const cleanInputs = () => {
        setData({
            title: "",
            desc: ""
        })
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( data.title !== "" && data.desc !== "" ) {
            onSubmit( data.title, data.desc );
            cleanInputs();
        }
        else {
            console.log("Noooo!!!!!");
        }
    }

    const handleChange = ( e ) => {
        const changeValue = { [e.target.name]: e.target.value };
        setData( prevData => {
            return { ...prevData, ...changeValue }
        } )
    }

    return(
        <form className="todo-form" onSubmit={ handleSubmit }>
            <label for="title">Title:</label>
            <input
                className="input-text"
                name="title"
                value={ data.title }
                onChange={handleChange}
            />
            <label for="desc">Description:</label>
            <input
            className="input-text"
            name="desc"
            value={ data.desc }
            onChange={handleChange}
            />

            <button className="btn btn-success" type="submit" name="Add Task">Add task</button>
        </form>
    )
}