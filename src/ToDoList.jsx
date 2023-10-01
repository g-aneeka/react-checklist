import { ToDoItem } from "./ToDoItem"

export function ToDoList({toDos, toggleToDo, deleteToDo}){
    return(
    
    <ul className="list">
      {toDos.length === 0 && "No To-Dos"}
      {toDos.map(todo => {
        return (
        <ToDoItem {...todo} key={todo.id} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
        )
      })}
    </ul>
    )
}