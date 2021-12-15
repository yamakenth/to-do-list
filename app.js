// to do item 
class ToDoItem {
  // constructor 
  constructor(title) {
    this.title = title;
    this.isCompleted = false;
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

const item1 = new ToDoItem('wash car');
const item2 = new ToDoItem('buy groceries');

toDoList.addItemToList(item1);
toDoList.addItemToList(item2);