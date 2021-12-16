import { createHeader } from './header';
import { ToDoItem, ToDoList } from './logic';
import { displayCurrentList } from './display';
import { createAddButton } from './add-button';
import { displayFrom } from './form';
import './style.css';

// create new list 
const toDoList = new ToDoList();
// example items 
const item1 = new ToDoItem('Wash car', 'Chores', 'wash then wax car', '2021-12-17', 'low');
toDoList.addItemToList(item1);
const item2 = new ToDoItem('Buy groceries', 'Chores', 'cabbage, bread, milk', '2021-12-15', 'high');
toDoList.addItemToList(item2);
const item3 = new ToDoItem('Math assignment 3', 'School', 'problem set 1 - 6', '2021-12-23', 'medium');
item3.toggleIsCompleted();
toDoList.addItemToList(item3);

// > body element 
const body = document.querySelector('body');
// >> header 
const header = createHeader();
body.appendChild(header);
// >> initial display 
let currDisplay = displayCurrentList(toDoList);
body.appendChild(currDisplay);
// >> add button 
const addButton = createAddButton();
body.appendChild(addButton);
// >> new item form 
const form = displayFrom(); 
body.appendChild(form); 


// add new item then display new list 
const overlay = document.querySelector('#overlay');
const newItemForm = document.querySelector('.new-item-form');
addButton.addEventListener('click', () => {
  overlay.classList.add('active');
  newItemForm.classList.add('active');
});

// add eventListener on form close button 
const formCloseButton = document.querySelector('.close-button');
formCloseButton.addEventListener('click', () => {
  overlay.classList.remove('active');
  newItemForm.classList.remove('active');
});

// add eventListener on form submit 
const titleInput = document.querySelector('#new-title');
const projectInput = document.querySelector('#new-project');
const descriptionInput = document.querySelector('#new-description');
const dueDateInput = document.querySelector('#new-due-date');

newItemForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTitle = titleInput.value;
  titleInput.value = '';
  const newProject = projectInput.value;
  projectInput.value = '';
  const newDescription = descriptionInput.value;
  descriptionInput.value = '';
  const newDueDate = dueDateInput.value;
  dueDateInput.value = null;
  const newPriorityInput = document.querySelector('input[name="priority"]:checked').value;
  document.querySelector('#medium').checked = true;

  overlay.classList.remove('active');
  newItemForm.classList.remove('active');

  const newItem = new ToDoItem(newTitle, newProject, newDescription, newDueDate, newPriorityInput);
  toDoList.addItemToList(newItem);

  const displayDiv = document.querySelector('.display');
  body.removeChild(displayDiv);
  currDisplay = displayCurrentList(toDoList);
  body.appendChild(currDisplay);
});


/*
import { createHeader } from "./header";
import { createDisplay } from "./display";
import { createAddButton } from "./addbutton";
import { toDoList } from "./app";
import './style.css';

const header = document.querySelector('.header');
createHeader(header);

const addButton = document.querySelector('.add-button');
createAddButton(addButton);

const display = document.querySelector('.display');
createDisplay(display);

const overlay = document.querySelector('#overlay');
const form = document.querySelector('.new-item-form');
const add = document.querySelector('.add-button button');
add.addEventListener('click', () => {
  overlay.classList.add('active');
  form.classList.add('active');
});

const closeButtons = document.querySelectorAll('.form-close');
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    overlay.classList.remove('active');
    form.classList.remove('active');
  });
});

const newTitle = document.querySelector("#new-title");
const newDetails = document.querySelector("#new-details");
const newDueDate = document.querySelector("#new-due-date");
const newPriority = document.querySelector("#new-priority");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTitleValue = newTitle.value;
  newTitle.value = '';

  const newDetailsValue = newDetails.value;
  newDetails.value = '';

  const newDueDateValue = newDueDate.value;
  newDueDate.value = '';

  const newPriorityValue = newPriority.value;
  newPriority.value = '';

  overlay.classList.remove('active');
  form.classList.remove('active');

  toDoList.addNewItemToList(newTitleValue, 'tag', newDetailsValue, newDueDateValue, "med");
  console.log(toDoList.list);
});
*/