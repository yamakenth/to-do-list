import { ToDoList } from './logic';
import { loadData } from './load-data';
import { createHeader } from './header';
import { createContent } from './content';
import { createSidebar } from './sidebar';
import { createListDisplay } from './list-display';
import { createAddButton } from './add-button';
import { createFormPage } from './form';
import { loadDataFromLocalStorage } from './storage';
import './style.css';


// create new list 
const toDoList = new ToDoList();

// test 
// loadDataFromLocalStorage(toDoList);

// load existing data then update toDoList 
loadData(toDoList); 
// console.log(JSON.stringify(toDoList.list));

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
createFormPage(toDoList);