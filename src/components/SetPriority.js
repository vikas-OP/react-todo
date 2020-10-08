import React, { useState } from "react"

const SetPriority = (props) => {
  const [priorityLevel, setPriorityLevel] = useState("all")
  return (
    <div className="d-flex align-items-center justify-content-center py-4">
      <h4 className="mx-3">Filter by Priority</h4>
      <select
        className="form-control w-25"
        value={priorityLevel}
        onChange={(e) => {
          setPriorityLevel(e.target.value)
          props.handlePriority(e.target.value)
        }}
      >
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  )
}

export default SetPriority
