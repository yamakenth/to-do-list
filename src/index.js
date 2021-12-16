import { ToDoItem, ToDoList } from "./logic";

// create new list 
const toDoList = new ToDoList();
// example items 
const exampleItems = (function () {
  const item1 = new ToDoItem('Wash car', 'Chores', 'wash then wax car', '2021-12-17', 'low');
  toDoList.addItemToList(item1);
  const item2 = new ToDoItem('Buy groceries', 'Chores', 'cabbage, bread, milk', '2021-12-15', 'high');
  toDoList.addItemToList(item2);
  const item3 = new ToDoItem('Math assignment 3', 'School', 'problem set 1 - 6', '2021-12-23', 'medium');
  item3.toggleIsCompleted();
  toDoList.addItemToList(item3);
})();

console.log(toDoList.groupByProject());