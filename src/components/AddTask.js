import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { addTodo, filterToDo } from '../Redux/actions/todoActions';



const AddTask = () => {
    const [newToDo, setNewToDo] = useState(
        {
            desc:'',
            isDone:false
        }
    )
    const dispatch = useDispatch()

    const HandleSubmit=(e)=> {
        e.preventDefault()
        dispatch(addTodo({...newToDo,id:uuidv4()}))
        setNewToDo({desc:'',isDone:false})
    }
    return (
        <div>
            
            <h1>To Do List, Try your best to do it All</h1> <Button id='All' onClick={(e)=>dispatch(filterToDo(e.target.id))}>All</Button> <Button variant="success" id='Done' onClick={(e)=>dispatch(filterToDo(e.target.id))}>Done</Button> <Button variant="danger" id='undone' onClick={(e)=>dispatch(filterToDo(e.target.id))}>Undone</Button>
            
            <form style={{marginTop:'20px'}} > 
                <input  required type="text" name="desc" value={newToDo.desc} onChange={(e)=>setNewToDo({...newToDo,desc:e.target.value})} />
                <Button variant="primary" type="submit" onClick={HandleSubmit}>Add</Button>
            </form>
        </div>
    )
}

export default AddTask
