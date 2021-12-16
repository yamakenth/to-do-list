import { ToDoList } from './logic';
import { loadData } from './load-data';
import { createHeader } from './header';
import './style.css';

////////////////////////////////////////// INITIAL SETUP //////////////////////////////////////////
// create new list 
const toDoList = new ToDoList();
// load existing data then update toDoList 
loadData(toDoList); 
// create lists grouped by projects 
const groupedToDoList = toDoList.groupByProject();
// create header 
createHeader();




/*
console.log(groupedToDoList);
console.log(Object.keys(groupedToDoList));
*/