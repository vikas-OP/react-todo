import React from "react"

const StatusBarItem = (props) => {
  return (
    <div className="d-flex flex-column m-2">
      <h6>{props.text}</h6>
      <h5 className="font-weight-bold">{props.number}</h5>
    </div>
  )
}

export default StatusBarItem
