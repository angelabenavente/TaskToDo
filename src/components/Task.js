import React from 'react';

const Task = props => {
  return <div className="task-wrapper" id={props.id} >
    <h3>{props.taskName}</h3>
    <p>{props.taskDescription}</p>
  </div>
}

export default Task;