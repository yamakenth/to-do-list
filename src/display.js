import { toDoList } from "./app";
import ViewDetailsIcon from "./view-details.png";
import EditIcon from "./edit.png";
import RemoveIcon from "./bin.png";

function createDisplay(display) {
  for (let i = 0; i < toDoList.list.length; i++) {
    const currItem = toDoList.list[i];
    // div for one item block 
    const toDoItemDisplay = document.createElement('div');
    toDoItemDisplay.classList.add('to-do-item');
    // div for left side 
    const left = document.createElement('div');
    left.classList.add('left');
    createLeftDiv(left, currItem);
    toDoItemDisplay.appendChild(left);
    // div for right side 
    const right = document.createElement('div');
    right.classList.add('right');
    createRightDiv(right, currItem);
    toDoItemDisplay.appendChild(right);
    // change right border color indicating priority
    toDoItemDisplay.classList.add(`priority-${currItem.priority}`);
    // displayPriorityLevel(toDoItemDisplay, currItem);
    // append item block to main div 
    display.appendChild(toDoItemDisplay);
  }
}

function createLeftDiv(left, currItem) {
  // check box 
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = currItem.isCompleted;
  // title 
  const displayTitle = document.createElement('h3');
  displayTitle.textContent = currItem.title;
  // append to left 
  left.appendChild(checkbox);
  left.appendChild(displayTitle);
}

function createRightDiv(right, currItem) {
  // due date 
  const dueDateDisplay = document.createElement('h4');
  dueDateDisplay.textContent = currItem.dueDate;
  // view details 
  const viewDetailsIcon = new Image();
  viewDetailsIcon.src = ViewDetailsIcon;
  viewDetailsIcon.alt = 'view details';
  viewDetailsIcon.classList.add('icon');
  viewDetailsIcon.classList.add('view-details');
  // edit 
  const editIcon = new Image();
  editIcon.src = EditIcon;
  editIcon.alt = 'edit item';
  editIcon.classList.add('icon');
  editIcon.classList.add('edit');
  // remove 
  const removeIcon = new Image();
  removeIcon.src = RemoveIcon;
  removeIcon.alt = 'remove item';
  removeIcon.classList.add('icon');
  removeIcon.classList.add('remove');
  // append to right 
  right.appendChild(dueDateDisplay);
  right.appendChild(viewDetailsIcon);
  right.appendChild(editIcon);
  right.appendChild(removeIcon);
}

// function displayPriorityLevel(toDoItemDisplay, currItem) {
//   console.log('entered function.');
//   console.log(currItem.priority);
//   if (currItem.priority === 'high') {
//     toDoItemDisplay.classList.add('.priority-high');
//   } else if (currItem.priority === 'low') {
//     toDoItemDisplay.classList.add('.priority-low');
//   } else {
//     toDoItemDisplay.classList.add('.priority-med');
//   }
// }

export { createDisplay };

/*
<div class="display">

  <div class="to-do-item">
    <div class="left">
      <input type="checkbox">
      <h3>Get mail</h3>
    </div>
    <div class="right">
      <h4 class="due-date">12/15/2021</h4>
      <img class="icon view-detials" src="../src/view-details.png" alt="view details">
      <img class="icon edit" src="../src/edit.png" alt="edit item">
      <img class="icon remove" src="../src/bin.png" alt="remove item">
    </div>
  </div>

</div>
*/

/*
toDoList.addNewItemToList('squats', 'workout', '5 x 5 100kg', '2021-12-18', 'low');
toDoList.list[0].toggleIsCompleted();
console.log(toDoList.list);
*/