'use client';

import { useState } from "react";

import InputBox from "@/components/InputBox"
import TaskList from "@/components/TaskList"

const TaskFeed = () => {
  const[taskList, setTaskList] = useState([]);

  return (
    <section className="m-5 grid grid-cols-1 gap-7 place-items-center">
      <InputBox taskList={taskList} setTaskList={setTaskList}/>
      <TaskList taskList={taskList} setTaskList={setTaskList}/>
    </section>
  )
}

export default TaskFeed