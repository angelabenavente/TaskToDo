import React from 'react';
import Task from './Task';


const AllTasks = props => {
  console.log(props);

  return (
    <div>
      <ul>
      {props.tasks
        .map((task) =>  <li className="task-wrapper" key={task.name}>
         <Task
         task={task}
         submitHandler={props.submitHandler}
         //taskDescription={task.description}
         />
         </li>
      )}
      </ul>
    </div>
  );
}


export default AllTasks;