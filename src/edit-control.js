import { clearDisplay, updateDisplay } from './submission-control';
import { addToggleControl } from './toggle-control';

// add ability to edit exiting item 
// take in document 
// return no results 
function addEditability(document, toDoList) {
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

}

export { addEditability };