import { ToDoItem } from './logic';

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

  console.log(toDoList);
}

export { updateList };