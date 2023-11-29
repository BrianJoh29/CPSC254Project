'use client';

import { CiCirclePlus } from "react-icons/ci";

import { v4 as uuidv4 } from 'uuid';

import { useRef } from "react";

const InputBox = ({ taskList, setTaskList }) => {
  const currentText = useRef();
  const formRef = useRef();

  const addTask = () => {
    event.preventDefault()
    const newTask = currentText.current.value.trim()

    if(newTask != ""){
      setTaskList([
        ...taskList,
        {
          id: uuidv4(),
          name: newTask,
          status: false
        },
      ])
    }
    
    console.log(taskList)

    formRef.current.reset()
  }
  
  return (
    <form className="my-4" ref={formRef} onSubmit={addTask}>
      <div className="flex justify-center items-center space-x-2">
        <input
          className="w-[20%] bg-gray-50 border border-gray-300 text-gray-900 
          text-sm rounded-lg focus:ring-[#e20eed] focus:border-[#b81bf1] block p-2.5"
          placeholder='Add Task'
          ref={currentText}
          required
        />
        <button type="submit">
          <CiCirclePlus size={45}/>
        </button>
      </div>
    </form>
  )
}

export default InputBox
