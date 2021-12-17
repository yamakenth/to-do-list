import { updateList } from './update-list';
import { createListDisplay } from './list-display';
import { createSidebar } from './sidebar';

// close form on click 
// take in no parameters 
// return no results 
function addEventListenerToCloseButton() {
  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    closeForm();
  });
}

// submit data and close form on submit button click 
// take in toDoList 
// return no results
function addEventListenerToSubmit(toDoList) {
  const form = document.querySelector('.new-item-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateList(toDoList, e.target.dataset.itemId);
    closeForm();
    createListDisplay(toDoList);
    createSidebar(toDoList);
  });
}

// remove active from overlay and form classes 
// take in overlay and form
// return no results 
function closeForm() {
  resetInputFields();
  document.querySelector('#overlay').classList.remove('active');
  document.querySelector('.new-item-form').classList.remove('active');
}

// reset input fields for new input 
// take in form
// return no results 
function resetInputFields() {
  document.querySelector('#new-title').value = '';
  document.querySelector('#new-project').value = '';
  document.querySelector('#new-description').value = '';
  document.querySelector('#new-due-date').value = null;
  document.querySelector('#medium').checked = true;
}

export { 
  addEventListenerToCloseButton, 
  addEventListenerToSubmit
};