import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import MyVerticallyCenteredModal from './Updatetask';
import { useDispatch, useSelector } from 'react-redux';
import { removeTaskFromList, setselectedTask } from '../slices/taskSlice';



function TasksList() {
    const {tasksList}= useSelector((state)=> state.tasks)
    const dispatch = useDispatch()

    const updateTask = (task)=>{
        console.log('updateTask');
        setmodalShow(true)
        dispatch(setselectedTask(task))
    }
    const deleteTask = (task)=>{
      
        console.log('deleteTask');
        dispatch(removeTaskFromList(task))
    }
    const [modalShow,setmodalShow]=useState(false)


  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            tasksList && tasksList.map((task,index)=>{
                return(
                    <tr className='text-center' key={task.id}>
          <td>{index+1}</td>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td> <Button variant="primary" className='mx-1' onClick={()=>updateTask(task)}><i className="bi bi-pencil-square"></i></Button>{' '} 
          <Button variant="danger"><i className="bi bi-trash" onClick={()=>deleteTask(task)}></i></Button>{' '}</td>
        </tr>

                )
            })
        }
        
        
      </tbody>
    </Table>
   
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setmodalShow(false)}
      />
    </>
  )
}

export default TasksList