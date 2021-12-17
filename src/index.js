import { ToDoList } from './logic';
import { loadData } from './load-data';
import { createHeader } from './header';
import { createContent } from './content';
import { createSidebar } from './sidebar';
import { createListDisplay } from './list-display';
import { createAddButton } from './add-button';
import { createFormPage } from './form';
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
// create display from loaded data 
createListDisplay(toDoList);
// create button to add new item
createAddButton();
// create form but hide until add/details button is clicked 
createFormPage();




/*
console.log(groupedToDoList);
console.log(Object.keys(groupedToDoList));

console.log(toDoList.list);
console.log(toDoList.list.map(obj => obj.project));
console.log([...new Set(toDoList.list.map(obj => obj.project))]);
*/