import Close from './img/close.png';

function displayFrom() {
  // > whole page 
  const formPage = document.createElement('div');
  formPage.classList.add('form-page');

  // >> overlay 
  const overlay = document.createElement('div');
  overlay.id = 'overlay';

  // >> new item form 
  const newItemForm = document.createElement('div');
  newItemForm.classList.add('new-item-form');

  // >>> form header
  const formHeader = document.createElement('div');
  formHeader.classList.add('form-header');
  // >>>> title 
  const title = document.createElement('h3');
  title.textContent = 'Add New Item';
  // >>>> close button 
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  // >>>>> icon 
  const icon = new Image();
  icon.src = Close;
  icon.alt = 'close icon';

  // >>> form row 1
  const row1 = document.createElement('div');
  row1.classList.add('form-row-1');
  // >>>> title input 
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'new-title';
  titleInput.placeholder = 'Title: Pay water bill';
  titleInput.required = true;
  // >>>> project input 
  const projectInput = document.createElement('input');
  projectInput.type = 'text';
  projectInput.id = 'new-project';
  projectInput.placeholder = 'Project: Chores';
  // >>> form row 2 
  const row2 = document.createElement('div');
  row2.classList.add('form-row-2');
  // >>>> description input 
  const descriptionInput = document.createElement('textarea');
  descriptionInput.id = 'new-description';
  descriptionInput.placeholder = 'Description: Pay online at www.paybill.com';
  descriptionInput.rows = '3';
  // >>> form row 3 
  const row3 = document.createElement('div');
  row3.classList.add('form-row-3');
  // >>>> label 
  const dueDateLabel = document.createElement('label');
  dueDateLabel.for = 'new-due-date';
  dueDateLabel.textContent = 'Due Date';
  // >>>> date input 
  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = '#new-due-date';
  // >>> form row 4
  const row4 = document.createElement('div');
  row4.classList.add('form-row-4');
  // >>>> label 
  const priorityLabel = document.createElement('p');
  priorityLabel.textContent = 'Priority';
  // >>>> priotity buttons 
  const priorityButtons = document.createElement('div');
  priorityButtons.classList.add('priority-buttons');
  // >>>>> low 
  const lowPriority = document.createElement('button');
  lowPriority.name = 'priority';
  lowPriority.value = 'low';
  lowPriority.textContent = 'Low';
  // >>>>> medium 
  const mediumPriority = document.createElement('button');
  mediumPriority.name = 'priority';
  mediumPriority.value = 'medium';
  mediumPriority.textContent = 'Medium';
  // >>>>> high 
  const highPriority = document.createElement('button');
  highPriority.name = 'priority';
  highPriority.value = 'high';
  highPriority.textContent = 'High';
  // >>> submit button 
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.classList.add('form-submit-button');
  submitButton.textContent = 'Submit';
  
  // append child to parent 
  closeButton.appendChild(icon);
  formHeader.appendChild(title);
  formHeader.appendChild(closeButton);
  newItemForm.appendChild(formHeader);
  row1.appendChild(titleInput);
  row1.appendChild(projectInput);
  newItemForm.appendChild(row1);
  row2.appendChild(descriptionInput);
  newItemForm.appendChild(row2);
  row3.appendChild(dueDateLabel);
  row3.appendChild(dueDateInput);
  newItemForm.appendChild(row3);
  priorityButtons.appendChild(lowPriority);
  priorityButtons.appendChild(mediumPriority);
  priorityButtons.appendChild(highPriority);
  row4.appendChild(priorityLabel);
  row4.appendChild(priorityButtons);
  newItemForm.appendChild(row4);
  newItemForm.appendChild(submitButton);
  formPage.appendChild(overlay);
  formPage.appendChild(newItemForm);
  return formPage;
}

export { displayFrom };

/*
<form class="new-item-form">
  <div class="form-header">
    <h3>Add New Item</h3>
    <button class="form-close">X</button>
  </div>
  <input type="text" id="new-title" placeholder="Title" required>
  <input type="text" id="new-details" placeholder="Details">
  <input type="date" id="new-due-date">
  <input type="range" id="new-priority" min="0" max="2" value="1" step="1">
  <div class="form-buttons">
    <button type="submit" class="submit-new-item">Submit</button>
    <button type="button" class="form-close cancel-new-item">Cancel</button>
  </div>
</form>
<div id="overlay"></div>
*/