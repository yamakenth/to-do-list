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
const initDisplay = displayCurrentList(toDoList);
body.appendChild(initDisplay);
// >> add button 
const addButton = createAddButton();
body.appendChild(addButton);

// add new item then display new list 
addButton.addEventListener('click', () => {
  console.log('clicked');
  const form = displayFrom();
  body.appendChild(form);
});


/*
  <div class="header"></div>
    <div class="content">
      <div class="navbar">navbar</div>
      <div class="display"></div>
    </div>
  <div class="add-button"></div>
*/


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