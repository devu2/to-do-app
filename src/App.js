import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import firebase from "firebase";
import DisplayToDoListItem from './displayToDo'

function App() {
  const [dos, setDoes] =  useState([]);
  const [todoInput, setTodoInput] =  useState('')
  useEffect(()=>{
    getTodosList();
  }, [])
  const addToDo = (e) =>{
    e.preventDefault();
    db.collection("todos").add({
      inprogress: true,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      dos: todoInput
    });
    setTodoInput("");
  }
  const getTodosList = () =>{
    db.collection("todos").onSnapshot(function(querySnapshot){
      setDoes(
        querySnapshot.docs.map((doc)=>({
          id: doc.id,
          todo: doc.data().dos,
          inprogress: doc.data().inprogress
        }))
      )
    })
  }

  return (
    <div className="App">
      <div>
        <form>
        <h1>My ToDo List App</h1>
        <TextField id="outlined-basic" className="todo" label="What To Do?" variant="outlined" value={todoInput} onChange={(e)=>setTodoInput(e.target.value)} />
        <Button type="submit" style={{display:"none"}} variant="contained" onClick={addToDo} >Default</Button>
        </form>
        {dos.map((todo)=>(
          <DisplayToDoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
