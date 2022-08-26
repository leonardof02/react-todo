import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

export default function TaskList() {
    
    const [ todolist, setList ] = useState({});

    const addTodo = ( title, desc ) => {
        const id = uuidv4();
        const date = new Date();
        const newTodo = {
            [id]: {
                id: id,
                title: title,
                desc: desc,
                completed: false,
                createdAt: date.toLocaleString()
            }
        }

        setList( prevList => {
            return { ...prevList, ...newTodo };
        });
    }

    const removeTodo = ( id ) => {
        const newTodoList = { ...todolist };
        delete newTodoList[id];
        setList( newTodoList );
    }

    const updateTodo = ( id, title, desc ) => {
        const date = new Date();

        const newTodo = {
            [id]: {
                id: id,
                title: title,
                desc: desc,
                completed: false,
                createdAt: date.toLocaleString()
            }
        }

        setList( prevList => {
            return { ...prevList, ...newTodo };
        });
    }

    const toggleCompleted = ( id ) => {
        const newTodoList = { ...todolist };
        newTodoList[id].completed = ! newTodoList[id].completed;
        setList( newTodoList );
    }

    const listTodos = () => {
        return Object.keys( todolist ).map( value => todolist[value] );
    }
    
    return(
        <>
            <ToDoForm onSubmit={ addTodo } />
            { listTodos().map( todo =>
            <ToDo
                key={ todo.id }
                id={ todo.id }
                title={ todo.title }
                desc={ todo.desc }
                createdAt={ todo.createdAt }
                completed={ todo.completed }
                onChange={ toggleCompleted }
                onClick={ removeTodo }
                onUpdate={ updateTodo }
            />) }
        </>
    )
}