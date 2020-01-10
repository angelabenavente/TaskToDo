import React from 'react';
import Task from './Task';


const AllTasks = props => {
  console.log(props);

// const fetchTasks = event => {
//   props.fetchTasks(event);
// }
  return (
    <div>
      <ul>
      {props.tasks
        .map((task,index) =>  <li className="task-wrapper" key={task.name}>
         <Task
         taskName={task.name}
         taskDescription={task.description}/>
         </li>
      )}
      </ul>
    </div>
  );
}


export default AllTasks;