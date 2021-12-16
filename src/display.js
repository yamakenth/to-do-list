import ViewDetailsIcon from "./img/view-details.png";
import EditIcon from "./img/edit.png";
import RemoveIcon from "./img/bin.png";

// display current list of to do items 
// take in current toDoList from index.js 
// return entire display element 
function displayCurrentList(toDoList) {
  
  // > display container below header 
  const displayContainer = document.createElement('div');
  displayContainer.classList.add('display');

  for (let i = 0; i < toDoList.list.length; i++) { 
    // current item in list 
    const currItem = toDoList.list[i];

    // >> create item container 
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item');
    itemContainer.classList.add(`priority-${currItem.priority}`);

    // >>> left container 
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('left-container');
    // >>>> checkbox 
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = currItem.isCompleted;
    // >>>> title 
    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = currItem.title;

    // >>> right container
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('right-container');
    // >>>> due date 
    const dueDate = document.createElement('h4');
    dueDate.classList.add('due-date');
    dueDate.textContent = currItem.dueDate;
    // >>>> buttons 
    const detailButton = document.createElement('button');
    detailButton.type = 'button';
    detailButton.classList.add('detail-button')
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.classList.add('edit-button')
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.classList.add('delete-button')
    // >>>>> icon in buttons 
    const detailButtonIcon = new Image();
    detailButtonIcon.src = ViewDetailsIcon;
    detailButtonIcon.alt = 'detail icon';
    detailButtonIcon.classList.add('icon');
    const editButtonIcon = new Image();
    editButtonIcon.src = EditIcon;
    editButtonIcon.alt = 'edit icon';
    editButtonIcon.classList.add('icon');
    const deleteButtonIcon = new Image();
    deleteButtonIcon.src = RemoveIcon;
    deleteButtonIcon.alt = 'delete icon';
    deleteButtonIcon.classList.add('icon');

    // append child to parent 
    detailButton.appendChild(detailButtonIcon);
    editButton.appendChild(editButtonIcon);
    deleteButton.appendChild(deleteButtonIcon);
    leftContainer.appendChild(checkBox);
    leftContainer.appendChild(title);
    rightContainer.appendChild(dueDate);
    rightContainer.appendChild(detailButton);
    rightContainer.appendChild(editButton);
    rightContainer.appendChild(deleteButton);
    itemContainer.appendChild(leftContainer);
    itemContainer.appendChild(rightContainer);
    displayContainer.appendChild(itemContainer); 
  }  
  return displayContainer;
}

export { displayCurrentList };