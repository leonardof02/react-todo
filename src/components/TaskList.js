import Task from './Task'
import TaskForm from './TaskForm';
import { useState } from "react";

export default function TaskList( props ) {
    
    const [ tasks, setTasks ] = useState( [
        {
            title: 'Test1',
            desc: 'Lorem Ipsum',
            checked: false
        },
        {
            title: 'Test2',
            desc: 'Mierda',
            checked: true
        },
        {
            title: 'KKCKC',
            desc: 'Cagasteeeee',
            checked: false
        }
    ] );

    const addTask = ( title, desc ) => {
        const newTask = { title, desc, checked: false };
        setTasks( [ ...tasks, newTask ] );
    }

    const deleteTask = ( id ) => {
        const newTaskList = [...tasks];
        newTaskList.splice( id, 1);
        console.log( newTaskList );
        setTasks( newTaskList );
    }

    const updateTask = ( id, title, desc ) => {
        const updateTasks = [...tasks];
        updateTasks[ id ].title = title;
        updateTasks[ id ].desc = desc;
        setTasks([...updateTasks]);
    }

    const toDos = tasks.map( ( task, index ) =>
    <Task key={ index } id={ index } title={ task.title }
    desc={ task.desc } isChecked={ task.checked } onEdit= { updateTask }
    onDelete={ deleteTask }/> )

    return(
        <>
            <TaskForm onSubmit={ addTask }/>
            <div className="task-list">
                { toDos }
            </div>
        </>
    )
}