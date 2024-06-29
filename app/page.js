'use client'
import { Main } from 'next/document'
import React, { useState } from 'react'
import bg from './i3.jpg'


const page = () => {
  const [title, settitle] = useState("")
  const [MainTask, setMainTask] = useState([])
  const Addingtask=(event)=>{
    event.preventDefault()
    setMainTask([...MainTask,title])
    settitle("")
  }
  const deletehandler=(i)=>{
    let copytask = [...MainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
  
  let renderTask=<h5 className='mt-72 opacity-50 font-bold '>Get things Done, A list that refreshes Everyday...</h5>;
  if(MainTask.length>0){
  renderTask=MainTask.map((value,index)=>{
    return(
      <>
      <div className='flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md'>
      <div className="text-lg font-semibold text-gray-700">{index +1}. {value}</div>
      <button onClick={ ()=> {
        deletehandler(index)
      } 
    }
      className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-90' >Delete task</button>
      </div>
      </>
    )})
  }
  return (
    <><div>
      <h1 className='fixed top-0 left-0 w-full bg-blue-500 text-white pl-4 text-center opacity-50' >°To-Do List</h1>
      <div className = 'ml-60 text-center font-medium bg-slate-200 w-96 mt-10 h-6 m-5 rounded opacity-80'> 
        <ul>  
          <li>
              {renderTask}
          </li>
        </ul>
        
      </div>
    <form onSubmit={Addingtask}>

      <div className='fixed inset-x-0 bottom-0 flex justify-center ml-44 m-1 h-6'>
      <input 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      type='text' placeholder='Add task' className='w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'/>
      </div>
    </form>
    </div>
    </>
  ) 
}


export default page

// w-full px-1 py-2 bg-blue-500 text-white text-bold shadow-md hover:bg-blue-700 mx-4 text-centre opacity-70