import React from 'react';


const AllTasks = props => {
  console.log(props);

// const fetchTasks = event => {
//   props.fetchTasks(event);
// }
  return (
    <div>
      <ul>
      {props.allTasks
        .map((task,index) =>  <li className="task-wrapper" key={task.name}>
         {task.name}      </li>
      )}

      </ul>
    </div>
  );
}


export default AllTasks;