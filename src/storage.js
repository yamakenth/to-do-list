import { ToDoItem } from "./logic";

// load data from local storage 
// take in toDoList 
// return no results 
function loadDataFromLocalStorage(toDoList) {
  // localStorage.clear();
  // if storage is empty then save to storage, otherwise load from storage 
  if (localStorage.length === 0) {
    console.log('localStorage is empty.');
    populateStorage();
  } else {
    console.log('importing data from local storage');
    importFromStorage();
  }

  // send data to localStorage 
  // take in no parameters 
  // return no results 
  function populateStorage() {
    const item1 = {
      title: 'Wash car',
      project: 'Chores',
      description: 'wash then wax car',
      dueDate: '2021-12-19',
      priority: 'low',
      isCompleted: true,
      id: 1639752209534
    }
    const item2 = {
      title: 'English: Read 1983',
      project: 'School',
      description: 'finish chapter 2',
      dueDate: '2021-12-16',
      priority: 'medium',
      isCompleted: false,
      id: 1639752220578
    }

    const testData = [item1, item2]

    localStorage.setItem('data', JSON.stringify(testData));
  }

  // import data from local storage 
  // take in no parameters 
  // return no results 
  function importFromStorage() {
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

export { loadDataFromLocalStorage };
