// individual to do item 
// properties: isCompleted, title, project, description, dueDate, priority
// methods: toggeIsCompleted
class ToDoItem {
  constructor(title, project, description, dueDate, priority) {
    this.isCompleted = false;
    this.title = title;
    this.project = project;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  toggleIsCompleted() {
    (this.isCompleted) ? this.isCompleted = false : this.isCompleted = true;
  }
}

// list of to do items 
// properties: list 
// methods: addItemToList
class ToDoList {
  constructor() {
    this.list = [];
  }
  addItemToList(item) {
    this.list.push(item);
  }
}

export { ToDoItem, ToDoList };