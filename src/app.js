// to do item 
class ToDoItem {
  // constructor 
  constructor(title, tag, details, dueDate, priority) {
    this.isCompleted = false;
    this.title = title;
    this.tag = tag;
    this.details = details;
    this.dueDate = dueDate;
    this.priotity = priority;
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
  // add item to list 
  addItemToList(item) {
    this.list.push(item);
  }

}

// test 
const toDoList = new ToDoList();

const item1 = new ToDoItem('wash car', 'chores', 'wash then wax car', '2021-12-17', 'low');
const item2 = new ToDoItem('buy groceries', 'chores', 'cabbage, bread, beer', '2021-12-15', 'high');
const item3 = new ToDoItem('math assignment 3', 'school', 'problem set 1 - 6', '2021-12-23', 'med');

toDoList.addItemToList(item1);
toDoList.addItemToList(item2);
toDoList.addItemToList(item3);

export { toDoList };