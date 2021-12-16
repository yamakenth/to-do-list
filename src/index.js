import { ToDoList } from './logic';
import { loadData } from './load-data';

////////////////////////////////////////// INITIAL SETUP //////////////////////////////////////////
// create new list 
const toDoList = new ToDoList();
// load existing data then update toDoList 
loadData(toDoList); 




/*
const groupedToDoList = toDoList.groupByProject();
console.log(groupedToDoList);
console.log(Object.keys(groupedToDoList));
*/