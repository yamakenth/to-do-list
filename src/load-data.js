import { ToDoItem } from './logic';

// load then populate list 
// take in toDoList
// return no results 
function loadData(toDoList) {
  const item1 = new ToDoItem('Wash car', 'Chores', 'wash then wax car', '2021-12-17', 'low');
  item1.id = 1639752209534;
  toDoList.addItemToList(item1);

  const item2 = new ToDoItem('Buy groceries', 'Chores', 'cabbage, bread, milk', '2021-12-15', 'high');
  item2.id = 1639752209545;
  item2.toggleIsCompleted();
  toDoList.addItemToList(item2);

  const item3 = new ToDoItem('Math assignment 3', 'School', 'problem set 1 - 6', '2021-12-23', 'medium');
  item3.id = 1639752209556;
  toDoList.addItemToList(item3);
}

export { loadData };