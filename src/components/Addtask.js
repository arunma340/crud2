import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addTaskTolist } from '../slices/taskSlice';
import { useDispatch } from 'react-redux';

function Addtask() {
    const dispatch = useDispatch()
   
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')

    const addTask = (e)=>{
        e.preventDefault()
        console.log({title,description});
        dispatch(addTaskTolist({title,description}))
        setTitle("")
        setDescription("")

    }
  return (
    <div className='my-5'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task title</Form.Label>
        <Form.Control type="text" placeholder="Enter Task title" 
        value={title} onChange={(e)=>setTitle(e.target.value)} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task description</Form.Label>
        <Form.Control type="text" placeholder="Enter task description"
        value={description} onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
      <div className='text-end'>
      <Button variant="primary" type="submit" onClick={(e)=>addTask(e)}>
        Add Task
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default Addtask