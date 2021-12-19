import { ToDoItem } from './logic';

// load then populate list 
// take in toDoList
// return no results 
function loadData(toDoList) {
  // chores 
  const item1 = new ToDoItem('Wash car', 'Chores', 'wash then wax car', '2021-12-17', 'low');
  item1.id = 1639752209534;
  toDoList.addItemToList(item1);

  const item2 = new ToDoItem('Buy groceries', 'Chores', 'cabbage, bread, milk', '2021-12-15', 'high');
  item2.id = 1639752209545;
  item2.toggleIsCompleted();
  toDoList.addItemToList(item2);

  // school 
  const item3 = new ToDoItem('English: Read 1983', 'School', 'finish chapter 2', '2021-12-16', 'medium');
  item3.id = 1639752220578;
  item3.toggleIsCompleted();
  toDoList.addItemToList(item3);

  const item4 = new ToDoItem('Math assignment 1', 'School', 'problem set 1 - 10', '2021-12-23', 'medium');
  item4.id = 1639752209556;
  item4.toggleIsCompleted();
  toDoList.addItemToList(item4);

  const item5 = new ToDoItem('Math assignment 2', 'School', 'problem set 11 - 20', '2021-12-24', 'low');
  item5.id = 1639752209567;
  item5.toggleIsCompleted();
  toDoList.addItemToList(item5);

  const item6 = new ToDoItem('Math assignment 3', 'School', 'problem set 21 - 30', '2021-01-03', 'high');
  item6.id = 1639752209578;
  toDoList.addItemToList(item6);
  
  const item7 = new ToDoItem('Physics Lab', 'School', 'read lab manual page 20-45', '2021-12-19', 'high');
  item7.id = 1639752210578;
  toDoList.addItemToList(item7);
  
  // exercise 
  const item8 = new ToDoItem('Soccer game', 'Exercise', '8pm at the stadium', '2021-12-19', 'medium');
  item8.id = 1639752230578;
  toDoList.addItemToList(item8);

  const item9 = new ToDoItem('Gym: leg day', 'Exercise', 'squat 5x5 100kg, leg press 3x10 150kg', '2021-01-01', 'low');
  item9.id = 1639752240578;
  toDoList.addItemToList(item9);

  const item10 = new ToDoItem('Run at the park', 'Exercise', '10am with running club', '2021-12-24', 'high');
  item10.id = 1639752250578;
  toDoList.addItemToList(item10);

  // books to read 
  const item11 = new ToDoItem('Animal Farm', 'Books to Read', 'George Orwell', '2022-01-10', 'medium');
  item11.id = 1639752260578;
  toDoList.addItemToList(item11);

  const item12 = new ToDoItem('The Great Gatsby', 'Books to Read', 'F. Scott Fitzgerald', '2022-02-24', 'medium');
  item12.id = 1639752280578;
  toDoList.addItemToList(item12);
}

export { loadData };