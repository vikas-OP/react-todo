import React, { useState } from "react"
import data from "../data"
import Header from "./Header"
import StatusBar from "./StatusBar"
import SetPriority from "./SetPriority"
import TaskList from "./TaskList"
import AddTask from "./AddTask"

const App = () => {
  const [tasks, setTasks] = useState(data)
  const [ID, setID] = useState(100)

  const filterTasksByPriority = (priorityLevel) => {
    if (priorityLevel == "all") {
      const newTasks = tasks.map((task) => {
        return {
          ...task,
          shouldRender: true,
        }
      })
      setTasks(newTasks)
    } else {
      const newTasks = tasks.map((task) => {
        if (task.priorityLevel != priorityLevel) {
          task.shouldRender = false
        } else {
          task.shouldRender = true
        }
        return task
      })
      setTasks(newTasks)
    }
  }

  const changeStatusOfTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id == id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        }
      } else {
        return task
      }
    })
    setTasks(newTasks)
  }

  const changePriorityOfTask = (id, priorityLevel) => {
    const newTasks = tasks.map((task) => {
      if (task.id == id) {
        return {
          ...task,
          priorityLevel,
        }
      } else {
        return task
      }
    })
    setTasks(newTasks)
  }

  const deleteOneTask = (id) => {
    const newTasks = tasks.filter((task) => task.id != id)
    setTasks(newTasks)
  }

  const addOneTask = (task) => {
    const newTasks = [
      ...tasks,
      {
        ...task,
        isComplete: false,
        shouldRender: true,
        id: ID,
      },
    ]
    setID(ID + 1)
    setTasks(newTasks)
  }

  return (
    <div className="min-vh-100 bg-warning">
      <Header />
      <StatusBar tasks={tasks} />
      <div className="container-fluid bg-warning">
        <SetPriority
          handlePriority={(priorityLevel) => {
            filterTasksByPriority(priorityLevel)
          }}
        />
        <TaskList
          tasks={tasks}
          changeStatus={(id) => changeStatusOfTask(id)}
          changePriority={(id, priorityLevel) =>
            changePriorityOfTask(id, priorityLevel)
          }
          deleteTask={(id) => deleteOneTask(id)}
        />
        <AddTask addTask={(task) => addOneTask(task)} />
      </div>
    </div>
  )
}

export default App
