'use client';

import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

import { useState } from "react";

const TaskCard = ({name, status}) => {
  const[taskStatus, setTaskStatus] = useState(status)
  
  const changeStatus = () => {
    setTaskStatus(!taskStatus);
  }

  return (
    <div className="bg-white w-[45%] min-h-[96px] rounded shadow-xl flex justify-between items-center">
      <p className="ml-5 break-words p-3 text-3xl">
        {name}
      </p>
      <button onClick={changeStatus} className="mr-5">
        {taskStatus ? 
          <FaRegCheckCircle className="text-[#618053]" size={30}/> 
          : 
          <RxCrossCircled className="text-red-600" size={30}/>
        }
      </button>
    </div>
  )
}

export default TaskCard