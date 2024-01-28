"use client"
import React, { useState } from 'react'

const page = () => {

  const [task, settask] = useState("")
  const [des, setdes] = useState("")
  const [mainTask, setmainTask] = useState([])

  let renderTask = <h1>No Task Avilable</h1>

  const deleteHandeler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask);
  }

  const submitHandeler = (e) =>{
    e.preventDefault()

    setmainTask ([...mainTask, {task, des}]);
    
   
    setdes("")
    settask("") 
    
    


  
  };
  if(mainTask.length>0){
    renderTask =mainTask.map((t , i)=>{

      return <li key={i} className=' flex items-center justify-between '>

            <div className='flex justify-between mb-3 w-2/3'>
                    <h2 className='text-2xl font-semibold'>{t.task}</h2>
                    <h3 className='text-xl font-mono'>{t.des}</h3>
            </div>
            <button 
            onClick={()=>{
              deleteHandeler(i);
            }}
            className='bg-red-500 text-white-500 p-2 rounded'>
              Delete
            </button>
      </li>
    })
  }

  

  

  return (
   <>
   <div className='bg-black text-white text-center text-3xl p-8'>Gautam's Todo-List</div>
   <form onSubmit={submitHandeler}>
      <input 
      type='text' placeholder='Enter your task here'
      className='border-blue-500 border-4 px-3 py-3 m-4'
      value={task} 
      onChange={(ele)=>{
        settask(ele.target.value)
      }}
      />

      <input 
      type='text' placeholder='Enter Description here'
      className='border-blue-500 border-4 px-3 py-3 m-4' 
      value={des}
      onChange={(ele)=>{
        setdes(ele.target.value)
      }}
      />

      <button className='bg-black text-white p-4 rounded font-bold m-4'>Add Task</button>
      
   </form>
   <div className='bg-slate-400 p-5 m-3 ' >

      <ul>
      {renderTask}
      </ul>
   </div>
   </>
  )
}

export default page