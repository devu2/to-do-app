import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import './displayToDo.css';
import { db } from './firebaseConfig';

export default function DisplayToDoListItem({todo, inprogress, id}) {
    const toggleTodos = ()=>{
        db.collection('todos').doc(id).update({
            inprogress: !inprogress
        })
    }
    const deleteTodos = () =>{
        db.collection('todos').doc(id).delete();
    }
    return (
        <div className="display">
            <ListItem>
                <ListItemText primary={todo} secondary={inprogress ? "In Progress":"Completed!"} />
            </ListItem>
            <Button onClick={toggleTodos}>{inprogress ? "Done":"UnDone"}</Button>
            <Button onClick={deleteTodos}>X</Button>
             
        </div>
    )
}

