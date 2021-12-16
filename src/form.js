import Close from './img/close.png';

function displayFrom() {
  // > whole page 
  const formPage = document.createElement('div');
  formPage.classList.add('form-page');

  // >> overlay 
  const overlay = document.createElement('div');
  overlay.id = 'overlay';

  // >> new item form 
  const newItemForm = document.createElement('form');
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
  dueDateInput.id = 'new-due-date';
  // >>> form row 4
  const row4 = document.createElement('div');
  row4.classList.add('form-row-4');
  // >>>> label 
  const priorityLabel = document.createElement('p');
  priorityLabel.textContent = 'Priority';
  // >>>> low radio 
  const lowRadio = document.createElement('div');
  lowRadio.classList.add('priority-radio');
  // >>>>> low label 
  const lowLabel = document.createElement('label');
  lowLabel.for = 'low';
  lowLabel.textContent = 'Low';
  // >>>>> low input 
  const lowInput = document.createElement('input');
  lowInput.type = 'radio';
  lowInput.id = 'low';
  lowInput.name = 'priority';
  lowInput.value = 'low';
  // >>>> medium radio 
  const mediumRadio = document.createElement('div');
  mediumRadio.classList.add('priority-radio');
  // >>>>> medium label 
  const mediumLabel = document.createElement('label');
  mediumLabel.for = 'medium';
  mediumLabel.textContent = 'Medium';
  // >>>>> medium input 
  const mediumInput = document.createElement('input');
  mediumInput.type = 'radio';
  mediumInput.id = 'medium';
  mediumInput.name = 'priority';
  mediumInput.value = 'medium';
  mediumInput.checked = true;
  // >>>> high radio 
  const highRadio = document.createElement('div');
  highRadio.classList.add('priority-radio');
  // >>>>> high label 
  const highLabel = document.createElement('label');
  highLabel.for = 'high';
  highLabel.textContent = 'High';
  // >>>>> high input 
  const highInput = document.createElement('input');
  highInput.type = 'radio';
  highInput.id = 'high';
  highInput.name = 'priority';
  highInput.value = 'high';
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
  highRadio.appendChild(highInput);
  highRadio.appendChild(highLabel);
  mediumRadio.appendChild(mediumInput);
  mediumRadio.appendChild(mediumLabel);
  lowRadio.appendChild(lowInput);
  lowRadio.appendChild(lowLabel);
  row4.appendChild(priorityLabel);
  row4.appendChild(highRadio);
  row4.appendChild(mediumRadio);
  row4.appendChild(lowRadio);
  newItemForm.appendChild(row4);
  newItemForm.appendChild(submitButton);
  formPage.appendChild(overlay);
  formPage.appendChild(newItemForm);
  return formPage;
}

export { displayFrom };