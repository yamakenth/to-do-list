import { ToDoItem } from './logic';

// update toDoList.list (no display)
// take in toDoList, idToUpdate
// return no results 
function updateList(toDoList, idToUpdate) {
  // grab data in input fields 
  const newTitle = document.querySelector('#new-title').value;
  const newProject = document.querySelector('#new-project').value;
  const newDescription = document.querySelector('#new-description').value;
  const newDueDate = document.querySelector('#new-due-date').value;
  const newPriorityInput = document.querySelector('input[name="priority"]:checked').value;
  // create a new item 
  const newItem = new ToDoItem(newTitle, newProject, newDescription, newDueDate, newPriorityInput);
  
  // get form submission type 
  const submissionType = document.querySelector('.new-item-form').dataset.submissionType;
  if (submissionType === 'add-item') {
    toDoList.addItemToList(newItem);
  } else if (submissionType === 'edit-item') {
    toDoList.updateItemOnList(idToUpdate, newItem);
  }
}

export { updateList };