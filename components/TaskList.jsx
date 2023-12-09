'use client';

import TaskCard from "./TaskCard"

import { useEffect } from "react";

const TaskList = ({taskList, setTaskList}) => {
  const getTask = async () => {
    const res = await fetch('/api/get-all-task')
    const response = await res.json()
    setTaskList(response)
  }

  // will run anything within it on the first render
  useEffect(() => {
    getTask()
  }, [])

  return (
    <div className="grid grid-cols-1 gap-7">
      {taskList.map((task) => (
        <TaskCard key={task.Id} id={task.Id} name={task.Name} 
        status={task.Status} taskList={taskList} setTaskList={setTaskList}
        />
      ))}
    </div>
  )
}

export default TaskList