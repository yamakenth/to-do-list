import { ToDoItem, ToDoList } from './logic';
import { createHeader } from './header';
import { createAddButton } from './add-button';
import { createFormPage } from './form';
import { addFormDisplayContrl } from './form-control';

import { displayCurrentList } from './display';
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
// add ability to open and close form
addFormDisplayContrl(document);

// display current list 





/*
// >> initial display 
let currDisplay = displayCurrentList(toDoList);
body.appendChild(currDisplay);

const checkBoxes = document.querySelectorAll('.item input[type="checkbox"]');
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const index = e.target.parentNode.parentNode.dataset.indexNumber;
      console.log(toDoList.list[index]);
      toDoList.list[index].toggleIsCompleted();
      console.log(toDoList.list[index]);
    });
  });

// add eventListener on form submit 
const titleInput = document.querySelector('#new-title');
const projectInput = document.querySelector('#new-project');
const descriptionInput = document.querySelector('#new-description');
const dueDateInput = document.querySelector('#new-due-date');

newItemForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTitle = titleInput.value;
  const newProject = projectInput.value;
  const newDescription = descriptionInput.value;
  const newDueDate = dueDateInput.value;
  const newPriorityInput = document.querySelector('input[name="priority"]:checked').value;

  const newItem = new ToDoItem(newTitle, newProject, newDescription, newDueDate, newPriorityInput);
  toDoList.addItemToList(newItem);

  const displayDiv = document.querySelector('.display');
  body.removeChild(displayDiv);
  currDisplay = displayCurrentList(toDoList);
  body.appendChild(currDisplay);
  
  const checkBoxes = document.querySelectorAll('.item input[type="checkbox"]');
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const index = e.target.parentNode.parentNode.dataset.indexNumber;
      console.log(toDoList.list[index]);
      toDoList.list[index].toggleIsCompleted();
      console.log(toDoList.list[index]);
    });
  });


});
*/