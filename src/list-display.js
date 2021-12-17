import ViewDetailsIcon from './img/view-details.png';
import RemoveIcon from './img/bin.png';
import { 
  addEventListenerToDetailsButton, 
  addEventListenerToDeleteButton,
  addEventListenrtToCheckbox
} from './list-display-logic';

// cretate display of current to do list 
// take in current list 
// return no results 
function createListDisplay(toDoList) {
  // clear display before creating a new one 
  clearCurrentDisplay();

  // > container
  const container = document.createElement('div');
  container.classList.add('display');
  // >> title 
  const title = document.createElement('h2');
  title.classList.add('to-do-title');
  title.textContent = 'Home';
  // >> items....
  // in loop below 

  // append child to parent 
  container.appendChild(title);
  for (let i = 0; i < toDoList.list.length; i++) {
    const currItem = toDoList.list[i];
    // >> create item container 
    const itemDisplay = createItemDisplay(currItem, i);
    // append child to parent
    container.appendChild(itemDisplay); 
  }
  document.querySelector('.content').appendChild(container);

  // addEventListener to buttons 
  addEventListenerToDetailsButton(toDoList);
  addEventListenerToDeleteButton(toDoList);
  addEventListenrtToCheckbox(toDoList);
}

// clear current display 
// take in no parameters 
// return no results 
function clearCurrentDisplay() {
  const display = document.querySelector('.display');
  if (display) {
    document.querySelector('.content').removeChild(display);
  }
}

// create item display for each to do item 
// take in currItem, i
// return <div class="item priority-{i}">...</div>
function createItemDisplay(currItem, i) {
  // > item container
  const itemContainer = createItemContainer(currItem, i);
  // >> left container 
  const leftContainer = createLeftContainer(currItem);
  // >> right container 
  const rightContainer = createRightContainer(currItem);
  
  // append child to parent 
  itemContainer.appendChild(leftContainer);
  itemContainer.appendChild(rightContainer);
  
  return itemContainer 
}

// create item container 
// take in currItem and i
// return <div class="item priority-{i}"></div>
function createItemContainer(currItem, i) {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('item');
  itemContainer.classList.add(`priority-${currItem.priority}`);
  itemContainer.dataset.indexNumber = i;

  return itemContainer;
}

// create left div in item div 
// take in currItem 
// return <div class="left-container"></div>
function createLeftContainer(currItem) {
  // > left container 
  const leftContainer = document.createElement('div');
  leftContainer.classList.add('left-container');
  // >> checkbox 
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.checked = currItem.isCompleted;
  // >> title 
  const title = document.createElement('h3');
  title.classList.add('title');
  title.textContent = currItem.title;

  // append child to parent 
  leftContainer.appendChild(checkBox);
  leftContainer.appendChild(title);

  return leftContainer;
}

// create right div in item div 
// take in currItem 
// return <div class="right-container"></div>
function createRightContainer(currItem) {
  // > right container
  const rightContainer = document.createElement('div');
  rightContainer.classList.add('right-container');
  // >> due date 
  const dueDate = document.createElement('h4');
  dueDate.classList.add('due-date');
  dueDate.textContent = currItem.dueDate;
  // >> buttons 
  const detailButton = createButton('detail', ViewDetailsIcon);
  const deleteButton = createButton('delete', RemoveIcon);
  
  // append child to parent 
  rightContainer.appendChild(dueDate);
  rightContainer.appendChild(detailButton);
  rightContainer.appendChild(deleteButton);

  return rightContainer;
}

// create button with icon 
// take in name and icon 
// return <div class="{name} button"></div>
function createButton(name, iconSrc) {
  // > button
  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add(`${name}-button`);
  // >> icon 
  const icon = new Image();
  icon.src = iconSrc;
  icon.alt = `${name} icon`;
  icon.classList.add('icon');

  // append child to parent 
  button.appendChild(icon);

  return button;
}

export { createListDisplay };