import { ToDoItem, ToDoList } from './logic';
import { createHeader } from './header';
import { createAddButton } from './add-button';
import { createFormPage } from './form';
import { addFormDisplayControl } from './form-control';
import { displayCurrentList } from './display';
import { addToggleControl } from './toggle-control';
import { addSubmissionControl } from './submission-control';
import { addEditability } from './edit-control';
import './style.css';

// create new list 
const toDoList = new ToDoList();
// example items 
const exampleItems = (function () {
  const item1 = new ToDoItem('Wash car', 'Chores', 'wash then wax car', '2021-12-17', 'low');
  toDoList.addItemToList(item1);
  const item2 = new ToDoItem('Buy groceries', 'Chores', 'cabbage, bread, milk', '2021-12-15', 'high');
  toDoList.addItemToList(item2);
  const item3 = new ToDoItem('Math assignment 3', 'School', 'problem set 1 - 6', '2021-12-23', 'medium');
  item3.toggleIsCompleted();
  toDoList.addItemToList(item3);
})();

// > body element 
const body = document.querySelector('body');

// >> header 
const header = createHeader();
body.appendChild(header);

// >> button to add new item 
const addButton = createAddButton();
body.appendChild(addButton);
// >> new item form 
const form = createFormPage(); 
body.appendChild(form); 

// display current list 
let currDisplay = displayCurrentList(toDoList);
body.appendChild(currDisplay);

// toggle completion status 
addToggleControl(document, toDoList);

// add submission of new item 
addSubmissionControl(document, toDoList);

// add ability to open and close form
addFormDisplayControl(document);

// add ability to edit existing item 
addEditability(document, toDoList);