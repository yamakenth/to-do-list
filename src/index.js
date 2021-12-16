import { ToDoList } from './logic';
import { loadData } from './load-data';
import { createHeader } from './header';
import { createContent } from './content';
import { createSidebar } from './sidebar';
import './style.css';

////////////////////////////////////////// INITIAL SETUP //////////////////////////////////////////
// create new list 
const toDoList = new ToDoList();
// load existing data then update toDoList 
loadData(toDoList); 
// create header 
createHeader();
// create content area for flex 
createContent();
// create sidebar
createSidebar(toDoList);




/*
console.log(groupedToDoList);
console.log(Object.keys(groupedToDoList));

console.log(toDoList.list);
console.log(toDoList.list.map(obj => obj.project));
console.log([...new Set(toDoList.list.map(obj => obj.project))]);
*/