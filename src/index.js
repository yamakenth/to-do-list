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

// create header 
createHeader();
// create content area for flex 
createContent();
// load and display dummy data when button is clicked 
const logo = document.querySelector('.header img');
logo.addEventListener('click', () => {
  loadData(toDoList);
  createListDisplay(toDoList);
}); 
// load data from local storage on app startup
loadDataFromLocalStorage(toDoList);

// create sidebar
createSidebar(toDoList);
// create display from loaded data 
createListDisplay(toDoList);
// create button to add new item
createAddButton();
// create form but hide until add/details button is clicked 
createFormPage(toDoList);