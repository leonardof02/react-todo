import { useState } from "react"

export default function TaskForm({ onSubmit }) {

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
        onSubmit( data.title, data.desc );
        cleanInputs();
    }

    const handleChange = ( e ) => {
        const changeValue = { [e.target.name]: e.target.value };
        setData( prevData => {
            return { ...prevData, ...changeValue }
        } )
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input
                className="input-title"
                name="title"
                value={ data.title }
                onChange={handleChange}
            />
            
            <input
            className="input-description"
            name="desc"
            value={ data.desc }
            onChange={handleChange}
            />

            <button type="submit" name="Add Task">Add task</button>
        </form>
    )
}