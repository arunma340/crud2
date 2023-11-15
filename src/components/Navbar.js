import React from 'react'
import { useSelector } from 'react-redux'
function Navbar() {
    const {tasksList}= useSelector((state)=> state.tasks)
  return (
    <div>
        <h1 className='text-center my-4 text-primary'>project management</h1>
        <p className='text-center lead'>{`currently ${tasksList.length} task(s)pending`}</p>
    </div>
  )
}

export default Navbar