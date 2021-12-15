import { createHeader } from './header';
import './style.css';

// > body element 
const body = document.querySelector('body');
// >> header 
const header = createHeader();
body.appendChild(header);


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