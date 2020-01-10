import React from 'react';
import { Link } from 'react-router-dom';

const Task = props => {
  const submitHandler = event => {
    console.log(event.target.id)
    //event.preventDefault();
    props.submitHandler(event.target.id);
  }
  return <div className="task-wrapper" id={props.task.id} >
    <h2>Nombre de tarea:</h2>
    <p>{props.task.name}</p>
    <Link to={`/detail`} className="card-btn">
      Ver detalle
    </Link>
    <button type="submit" id={props.task.id} onClick={submitHandler}>Cambiar</button>
  </div>
}

export default Task;