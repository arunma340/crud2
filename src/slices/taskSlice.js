import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    tasksList:[],
    selectedTask:{}
}

const taskSlice = createSlice({
    name:'taskslice',
    initialState,
    reducers:{
        addTaskTolist:(state,action)=>{
            const id = Math.random() * 100
            let task = {...action.payload,id}
            state.tasksList.push(task)
        },
        removeTaskFromList:(state,action)=>{
            state.tasksList = state.tasksList.filter((task)=>task.id != action.payload.id)
        },
        updateTaskInList:(state,action)=>{
            state.tasksList = state.tasksList.map((task)=>task.id === action.payload.id ? action.payload:task)
        },
        setselectedTask:(state,action)=>{
            state.selectedTask = action.payload
        }
    }
})
export const{addTaskTolist,removeTaskFromList,updateTaskInList,setselectedTask} =taskSlice.actions
export default taskSlice.reducer