const TASKLIST = './data/data.json';

const getDataFromApi = () => fetch(TASKLIST).then(response => response.json());

export {getDataFromApi};