'use client';

import { RxCross1 } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

import { useState } from "react";

const TaskCard = ({id, name, status, taskList, setTaskList}) => {
  const[modal, setModal] = useState(false)
  const[taskStatus, setTaskStatus] = useState(status)
  const[currentName, setCurrentName] = useState(name)
  const[updateName, setUpdateName] = useState(name)
  
  const changeName = async () => {
    // make sure string is not empty
    if(updateName != ""){
      // updates the client-side/frontend
      setCurrentName(updateName)
      setModal(!modal)
      setTaskStatus(false)

      //updates the server-side/backend
      try{
        const res = await fetch(
          '/api/edit-task', {
            method: 'PATCH',
            body: JSON.stringify({
              Id: id,
              Name: updateName,
              Status: false
            })
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  const changeStatus = async () => {
    // updates the client-side/frontend
    setTaskStatus(!taskStatus)

    // updates the server-side/backend
    try{
      const res = await fetch(
        '/api/edit-task', {
          method: 'PATCH',
          body: JSON.stringify({
            Id: id,
            Name: currentName,
            Status: !taskStatus
          })
      })
    } catch (error) {
      console.log(error)
    }
  }

  const toggleModal = () => {
    setModal(!modal)
    setUpdateName(currentName)
  }

  const deleteItem = async () => {
    // updates on the client-side/frontend
    // removes the current item from the list
    const newTaskList = taskList.filter((task) => task.Id !== id)
    // sets taskList to the new filtered list
    setTaskList(newTaskList)

    // updates on the server-side/backend
    try{
      const res = await fetch(
        '/api/delete-task', {
          method: 'DELETE',
          body: JSON.stringify({
            Id: id,
          })
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="transition-all duration-300 ease-in-out bg-white w-96 min-h-[96px] 
      rounded-lg hover:shadow-[5px_30px_70px_-25px_rgba(0,0,0,1)] 
        shadow-[28px_48px_76px_-44px_rgba(88,69,133,1)] hover:-translate-y-[5px] 
        grid grid-cols-5"
      >
        <button type="button" onClick={toggleModal} className="p-5 text-3xl text-justify col-span-4">
          {currentName}
        </button>
        {taskStatus ? 
          <FaRegCheckCircle onClick={changeStatus} 
          className="justify-self-end self-center m-6 text-[#618053] cursor-pointer" size={30}/> 
          : 
          <RxCrossCircled onClick={changeStatus} 
          className="justify-self-end self-center m-6 text-red-600 cursor-pointer" size={30}/>
        }
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
              <button className="text-blue-500" type="button" onClick={changeName}>
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