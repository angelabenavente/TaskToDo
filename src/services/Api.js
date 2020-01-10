const TASKLIST = './data/data.json';

const fetchTasks = () => fetch(TASKLIST).then(response => response.json());


export {fetchTasks};