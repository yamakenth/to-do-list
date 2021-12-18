import { createListDisplay } from "./list-display";
import { createSidebar } from "./sidebar";

// details button on click, show form 
// take in toDoList 
// return no results 
function addEventListenerToDetailsButton(toDoList) {
  const detetailButtons = document.querySelectorAll('.detail-button');
  detetailButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const itemId = parseInt(e.target.parentNode.parentNode.parentNode.dataset.itemId);
      const currItem = toDoList.getItemById(itemId);
      displayForm();
      populateForm(currItem);
    });
  });
}

// display from 
// take in no parameters 
// return no results 
function displayForm() {
  document.querySelector('#overlay').classList.add('active');
  document.querySelector('.new-item-form').classList.add('active');
}

// populate form with data from current item 
// take in currItem
// return no results
function populateForm(currItem) {
  // change title and submit button text 
  document.querySelector('.form-header h3').textContent = 'Details'
  document.querySelector('.new-item-form button[type=submit] p').textContent = 'Edit';
  // populate fields 
  document.querySelector('#new-title').value = currItem.title;
  document.querySelector('#new-project').value = currItem.project;
  document.querySelector('#new-description').value = currItem.description;
  document.querySelector('#new-due-date').value = currItem.dueDate;
  document.querySelector(`#${currItem.priority}`).checked = true;
  // add/change submission type of form 
  document.querySelector('.new-item-form').dataset.submissionType = 'edit-item';
  // add item id to form 
  document.querySelector('.new-item-form').dataset.itemId = currItem.id;
}

// delete button on click 
// take in toDoList 
// return no results 
function addEventListenerToDeleteButton(toDoList) {
  const deleteButtons = document.querySelectorAll('.delete-button > img');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const idToRemove = parseInt(e.target.parentNode.parentNode.parentNode.dataset.itemId);
      toDoList.removeItemFromList(idToRemove);
      createListDisplay(toDoList);
      createSidebar(toDoList);
    });
  });
}

// add ability to toggle completion status 
// take in document 
// return no results 
function addEventListenrtToCheckbox(toDoList) {
  // check box 
  const checkBoxes = document.querySelectorAll('.item input[type="checkbox"]');
  // toggle for each item 
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const itemId = parseInt(e.target.parentNode.parentNode.dataset.itemId);
      const currItem = toDoList.getItemById(itemId);
      currItem.toggleIsCompleted();
    });
  });
}

export { 
  addEventListenerToDetailsButton,
  addEventListenerToDeleteButton,
  addEventListenrtToCheckbox
};