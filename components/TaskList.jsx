import TaskCard from "./TaskCard"

const TaskList = ({ taskList }) => {
  return (
    <div className="grid grid-cols-1 gap-7 my-5 place-items-center">
      {taskList.map((task) => (
        <TaskCard name={task.name} status={task.status}/>
      ))}
    </div>
  )
}

export default TaskList