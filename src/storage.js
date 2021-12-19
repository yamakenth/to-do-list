import { ToDoItem } from "./logic";
import { format } from 'date-fns';

// load data from local storage 
// take in toDoList
// return no results 
function loadDataFromLocalStorage(toDoList) {
  if (localStorage.length === 0) {
    console.log('localStorage is empty.');
    // add example item 
    const exampleItem = new ToDoItem(
      'New To Do', 'New Project', 'Description/Notes for to do item', 
      format(new Date(), 'yyyy-MM-dd'), 'medium'
    );
    toDoList.addItemToList(exampleItem);
  } else {
    console.log('importing data from local storage...');
    const loadedData = JSON.parse(localStorage.getItem('data'));
    for (let i = 0; i < loadedData.length; i++) {
      const currItem = loadedData[i];

      const title = currItem.title;
      const project = currItem.project;
      const description = currItem.description;
      const dueDate = currItem.dueDate;
      const priority = currItem.priority;
      const isCompleted = currItem.isCompleted;
      const id = currItem.id;

      const toDoItem = new ToDoItem(title, project, description, dueDate, priority, isCompleted, id);
      toDoList.addItemToList(toDoItem);
    }
  }
}

// rewrite data everytime form is submitted, item is deleted, or completion status is toggled 
// take in toDoList 
// return no results 
function saveDataToLocalStorage(toDoList) {
  console.log('saving data to local storage...');
  localStorage.clear();
  localStorage.setItem('data', JSON.stringify(toDoList.list));
}

export { loadDataFromLocalStorage, saveDataToLocalStorage };