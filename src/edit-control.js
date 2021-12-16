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
      console.log(indexToRemove);
      toDoList.removeItemFromList(indexToRemove);
      console.log(toDoList.list);
      clearDisplay();
      updateDisplay(toDoList);
      addToggleControl(document, toDoList);
      addEditability(document, toDoList);
    });
  });

}

export { addEditability };