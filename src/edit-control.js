import { clearDisplay, updateDisplay } from './submission-control';
import { addToggleControl } from './toggle-control';

// add ability to edit exiting item 
// take in document 
// return no results 
function addEditability(document, toDoList) {
  // delete 
  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const indexToRemove = e.target.parentNode.parentNode.parentNode.dataset.indexNumber;
      toDoList.removeItemFromList(indexToRemove);
      clearDisplay();
      updateDisplay(toDoList);
      addToggleControl(document, toDoList);
      addEditability(document, toDoList);
    });
  });

  // view detail/edit 
  const overlay = document.querySelector('#overlay');
  const newItemForm = document.querySelector('.new-item-form');
  const detailButtons = document.querySelectorAll('.detail-button');
  detailButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const currItem = toDoList.list[e.target.parentNode.parentNode.parentNode.dataset.indexNumber];
      
      overlay.classList.add('active');
      newItemForm.classList.add('active');
      newItemForm.querySelector('#new-title').select();

      newItemForm.querySelector('#new-title').value = currItem.title;
      newItemForm.querySelector('#new-project').value = currItem.project;
      newItemForm.querySelector('#new-description').value = currItem.description;
      newItemForm.querySelector('#new-due-date').value = currItem.dueDate;
      newItemForm.querySelector(`#${currItem.priority}`).checked = true;


    });
  });

}

export { addEditability };