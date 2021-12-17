import { getWeek, isToday, parseISO } from 'date-fns';

// individual to do item 
// properties: title, project, description, dueDate, priority, isCompleted, id
// methods: toggeIsCompleted
class ToDoItem {
  constructor(title, project, description, dueDate, priority) {
    this.title = title;
    this.project = project;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = false;
    this.id = new Date().getTime();
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
  removeItemFromList(index) {
    this.list.splice(index, 1);
  }
  updateItemOnList(index, item) {
    this.list[index] = item;
  }
  groupByProject() {
    const groupedToDoLists = {};
    for (let i = 0; i < this.list.length; i++) {
      const currItem = this.list[i];
      const currProject = currItem.project;
      if (!groupedToDoLists.hasOwnProperty(currProject)) {
        groupedToDoLists[currProject] = new ToDoList();
      }
      groupedToDoLists[currProject].addItemToList(currItem);
    }
    return groupedToDoLists;
  }
  getUniqueProjects() {
    const projects = this.list.map(obj => obj.project);
    return [...new Set(projects)];
  }
  todaysToDoList() {
    const newToDoList = new ToDoList();
    const newArray = this.list.filter(obj => isToday(parseISO(obj.dueDate)));
    for (let i = 0; i < newArray.length; i++) {
      newToDoList.addItemToList(newArray[i]);
    }
    return newToDoList
  }
  thisWeeksToDoList() {
    const newToDoList = new ToDoList();
    const newArray = this.list.filter(obj => getWeek(parseISO(obj.dueDate)) === getWeek(new Date()));
    for (let i = 0; i < newArray.length; i++) {
      newToDoList.addItemToList(newArray[i]);
    }
    return newToDoList;
  }
}

export { ToDoItem, ToDoList };