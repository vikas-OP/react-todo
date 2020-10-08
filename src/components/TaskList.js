import React from "react"
import TaskItem from "./TaskItem"

const TaskList = (props) => {
  const taskItems = props.tasks.map((task, i) =>
    task.shouldRender ? (
      <TaskItem
        task={task}
        key={i}
        changeStatus={(id) => props.changeStatus(id)}
        changePriority={(id, priorityLevel) =>
          props.changePriority(id, priorityLevel)
        }
        deleteTask={(id) => props.deleteTask(id)}
      />
    ) : null
  )
  return <>{taskItems}</>
}

export default TaskList
