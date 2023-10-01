import { useState } from "react"

export function ToDoForm({onAdd}){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()
    
        if(newItem === "") return

        onAdd(newItem)
        
        setNewItem("")
      }

    return(
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          {/* <label htmlFor="item">New Item</label> */}
          <input value={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id="item" placeholder="Add new..." />
        </div>
        <button className="btn">Add</button>
      </form> 
    )
}