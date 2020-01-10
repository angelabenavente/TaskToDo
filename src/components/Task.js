import React from 'react';
import { Link } from 'react-router-dom';

const Task = props => {

  const handleTaskIdStatus = event => {
    console.log(event.target.id)
    props.handleTaskIdStatus(props.task.id);
  }
  return <div className="task-wrapper" id={props.task.id} >
    <h2>Nombre de tarea:</h2>
    <p>{props.task.name}</p>
    <Link to={`/detail`} className="card-btn">
      Ver detalle
    </Link>
    <button type="submit" id={props.task.id} onClick={handleTaskIdStatus}>Cambiar</button>
  </div>
}

export default Task;