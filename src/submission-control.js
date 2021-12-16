import { ToDoItem } from './logic';
import { displayCurrentList } from './display';
import { addToggleControl } from './toggle-control';

// add ability to update list with new item and display new list 
// take in document 
// return no results 
function addSubmissionControl(document, toDoList) {
  // query selectors
  const form = document.querySelector('.new-item-form');

  // add eventListener on form submit 
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateList(toDoList);
    clearDisplay();
    updateDisplay(toDoList);
    addToggleControl(document, toDoList);
  }); 
}

// update toDoList.list (no display)
// take in toDoList
// return no results 
function updateList(toDoList) {
  const newTitle = document.querySelector('#new-title').value;
  const newProject = document.querySelector('#new-project').value;
  const newDescription = document.querySelector('#new-description').value;
  const newDueDate = document.querySelector('#new-due-date').value;
  const newPriorityInput = document.querySelector('input[name="priority"]:checked').value;

  const newItem = new ToDoItem(newTitle, newProject, newDescription, newDueDate, newPriorityInput);
  toDoList.addItemToList(newItem);
}

// clear current display 
// take in no parameters 
// return no results 
function clearDisplay() {
  const displayDiv = document.querySelector('.display');
  document.querySelector('body').removeChild(displayDiv);
}

// update display with new list 
// take in updated toDoList
// return no results 
function updateDisplay(toDoList) {
  const currDisplay = displayCurrentList(toDoList);
  document.querySelector('body').appendChild(currDisplay);
}

export { addSubmissionControl };