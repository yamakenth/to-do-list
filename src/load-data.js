import { ToDoItem } from './logic';

// dummy data 
const dummy = [
  new ToDoItem('Wash car', 'Chores', 'wash then wax car', '2021-12-17', 'low'),
  new ToDoItem('Buy groceries', 'Chores', 'cabbage, bread, milk', '2021-12-15', 'high'),
  new ToDoItem('Math assignment 3', 'School', 'problem set 1 - 6', '2021-12-23', 'medium')
];

// load then populate list 
// take in toDoList
// return no results 
function loadData(toDoList) {
  for (let i = 0; i < dummy.length; i++) {
    toDoList.addItemToList(dummy[i]);
    /* code below for test only */
    if (i === 1) {
      dummy[i].toggleIsCompleted();
    }
    /* code above for test only */
  }
}

export { loadData };