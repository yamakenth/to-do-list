import ViewDetailsIcon from "./img/view-details.png";
import RemoveIcon from "./img/bin.png";

// display current list of to do items 
// take in current toDoList from index.js 
// return entire display element 
function displayCurrentList(toDoList) {
  // > display container below header 
  const displayContainer = document.createElement('div');
  displayContainer.classList.add('display');

  // create each item 
  for (let i = 0; i < toDoList.list.length; i++) { 
    // current item in list 
    const currItem = toDoList.list[i];
    // >> create item container 
    const itemDisplay = createItemDisplay(currItem, i);
    
    // append child to parent
    displayContainer.appendChild(itemDisplay); 
  }  

  return displayContainer;
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

export { displayCurrentList };