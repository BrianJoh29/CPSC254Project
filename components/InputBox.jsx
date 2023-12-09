'use client';

import { CiCirclePlus } from "react-icons/ci";

import { v4 as uuidv4 } from 'uuid';

import { useRef } from "react";

const InputBox = ({taskList, setTaskList}) => {
  const currentText = useRef();
  const formRef = useRef();

  const addTask = async () => {
    // prevent page refresh
    event.preventDefault()

    // ensures that the input is acceptable
    const newTask = currentText.current.value.trim()
    
    // reset form
    formRef.current.reset()

    // ensures no empty strings
    if(newTask != ""){
      // create new object to add
      const newItem = {
        Id: uuidv4(),
        Name: newTask,
        Status: false
      }

      // updates the client-side/frontend
      setTaskList([
        ...taskList,
        newItem
      ])

      // updates the server-side/backend
      try{
        const res = await fetch(
          '/api/add-task', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  
  return (
    <form ref={formRef} onSubmit={addTask}>
      <div className="flex">
        <input
          className="w-60 bg-gray-50 border border-gray-300 text-gray-900 
          text-sm rounded-lg focus:ring-[#e20eed] focus:border-[#b81bf1] block p-2.5"
          placeholder='Add Task'
          ref={currentText}
          required
        />
        <CiCirclePlus onClick={addTask} className="cursor-pointer" size={45}/>
      </div>
    </form>
  )
}

export default InputBox
