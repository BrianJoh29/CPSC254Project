import TaskCard from "./TaskCard"

const TaskList = ({ taskList, setTaskList }) => {
  return (
    <div className="grid grid-cols-1 gap-7 my-5 place-items-center">
      {taskList.map((task) => (
        <TaskCard key={task.id} id={task.id} name={task.name} 
        status={task.status} taskList={taskList} setTaskList={setTaskList}
        />
      ))}
    </div>
  )
}

export default TaskList