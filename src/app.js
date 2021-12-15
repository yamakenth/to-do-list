// to do item 
class ToDoItem {
  // constructor 
  constructor(title, tag, details, dueDate, priority) {
    this.isCompleted = false;
    this.title = title;
    this.tag = tag;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  // toggle complete status 
  toggleIsCompleted() {
    (this.isCompleted) ? this.isCompleted = false : this.isCompleted = true;
  }
}

// to do list 
class ToDoList {
  // constructor
  constructor() {
    this.list = [];
  }
  // create and add item to list 
  addNewItemToList(title, tag, details, dueDate, priority) {
    const newItem = new ToDoItem(title, tag, details, dueDate, priority);
    this.list.push(newItem);
  }
}

// test 
const toDoList = new ToDoList();

toDoList.addNewItemToList('wash car', 'chores', 'wash then wax car', '2021-12-17', 'low');
toDoList.addNewItemToList('buy groceries', 'chores', 'cabbage, bread, beer', '2021-12-15', 'high');
toDoList.addNewItemToList('math assignment 3', 'school', 'problem set 1 - 6', '2021-12-23', 'med');
toDoList.list[2].isCompleted = true;

export { toDoList }