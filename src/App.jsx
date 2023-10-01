import { useEffect, useState } from "react"
import "./style.css"
import todoImage from './assets/to_do_list_img.svg'
import { ToDoForm } from "./ToDoForm"
import { ToDoList } from "./ToDoList"

export default function App() {
  
  const [toDos, setToDos] = useState(() => {
    const localList = localStorage.getItem("ITEMS")
    if(localList === null) return []
    return JSON.parse(localList)
  })

  useEffect( () => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos))
  }, [toDos])

  function addToDo(title){
    setToDos(currentToDos => {
      return[
        ...currentToDos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        }
      ]
    }) 
  }

  function toggleToDo(id, completed) {
    setToDos(currentToDos => {
      return currentToDos.map( todo =>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteToDo(id) {
    setToDos(currentToDos => {
      return currentToDos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <div className="row">
        <div className="column ">
          <img src={todoImage} className="todo_image" alt="todoImage" />
        </div>
        <div className="column">
          <h1 className="main_header">My Checklist</h1>
          <ToDoForm onAdd={addToDo} />
          <h1 className="header">To-Do List</h1>
          <ToDoList
            toDos={toDos}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
          />
        </div>
      </div>
    </>
  );
}