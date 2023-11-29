'use client';

import { RxCross1 } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

import { useState } from "react";

const TaskCard = ({id, name, status, taskList, setTaskList}) => {
  const[taskStatus, setTaskStatus] = useState(status)
  
  const[modal, setModal] = useState(false)
  
  const[currentName, setCurrentName] = useState(name)
  const[updateName, setUpdateName] = useState(name)
  
  const changeStatus = () => {
    setTaskStatus(!taskStatus)
  }

  const toggleModal = () => {
    setModal(!modal)
    setUpdateName(currentName)
  }

  const saveChange = () => {
    if(updateName != "")
    {
      setCurrentName(updateName)
      setModal(!modal)
    }
  }

  const deleteItem = () => {
    const newTaskList = taskList.filter((task) => task.id !== id)
    console.log(newTaskList)
    setTaskList(newTaskList)
  }

  return (
    <>
      <div className="bg-white w-[45%] min-h-[96px] rounded shadow-[28px_48px_76px_-44px_rgba(88,69,133,1)] flex items-center">
        <button type="button" onClick={toggleModal} className="grow text-left ml-5 break-words p-3 text-3xl">
          {currentName}
        </button>
        <button onClick={changeStatus} className="mr-5">
          {taskStatus ? 
            <FaRegCheckCircle className="text-[#618053]" size={30}/> 
            : 
            <RxCrossCircled className="text-red-600" size={30}/>
          }
        </button>
      </div>

      { modal && (
        <div className="w-[100vw] h-[100vh] inset-0 fixed">
          <div onClick={toggleModal} className="w-[100vw] h-[100vh] inset-0 fixed bg-[rgba(49,49,49,0.8)]"></div>
          <div className="absolute flex flex-col top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#f1f1f1] max-w-[600px] 
          min-w-[300px] leading-snug px-[14px] py-[20px] rounded-lg space-y-5">
            <button className="self-end" type="button" onClick={toggleModal}>
              <RxCross1 />
            </button>
            <div className="w-72">
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  className="inputUpdateBox
                  placeholder-shown:border-blue-gray-200 
                  placeholder-shown:border-t-blue-gray-200 
                  text-blue-gray-700
                  border-blue-gray-200
                  peer
                  disabled:bg-blue-gray-50"
                  value={updateName}
                  placeholder=" "
                  onChange={(e) => setUpdateName(e.target.value)}
                  required
                />
                <label className="labelUpdateBox
                peer-disabled:peer-placeholder-shown:text-blue-gray-500
                peer-placeholder-shown:text-blue-gray-500 
                after:border-blue-gray-200
                before:border-blue-gray-200
                text-blue-gray-400 
                before:content[' '] after:content[' ']">
                  Edit Task
                </label>
              </div>
            </div>
            <div className="self-end space-x-4">
              <button className="text-red-500" type="button" onClick={deleteItem}>
                Delete
              </button>
              <button className="text-blue-500" type="button" onClick={saveChange}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TaskCard