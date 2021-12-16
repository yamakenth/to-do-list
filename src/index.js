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
// create lists grouped by projects 
const groupedToDoList = toDoList.groupByProject();
// create header 
createHeader();
// create content area for flex 
createContent();
// create sidebar
createSidebar();




/*
console.log(groupedToDoList);
console.log(Object.keys(groupedToDoList));
*/