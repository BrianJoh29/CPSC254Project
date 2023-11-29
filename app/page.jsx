"use client";

import InputBox from "@/components/InputBox"
import TaskList from "@/components/TaskList"

import { database } from "@/constants"

import { useState } from "react";

export default function Home() {
  const[taskList, setTaskList] = useState(database);

  return (
    <main>
      <InputBox taskList={taskList} setTaskList={setTaskList}/>
      <TaskList taskList={taskList}/>
    </main>
  )
}
