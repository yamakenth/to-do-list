import Close from './img/close.png';
import Submit from './img/submit.png';

// create input form covering the whole page (form + overlay)
// take in no parameters 
// return no results  
function createFormPage() {
  // > whole page 
  const formPage = document.createElement('div');
  formPage.classList.add('form-page');
  // >> overlay 
  const overlay = createOverlay();
  // >> new item form 
  const form = createForm();
  // append child to parent 
  formPage.appendChild(overlay);
  formPage.appendChild(form);
  document.querySelector('body').appendChild(formPage);

  return formPage;
}

// create overlay 
// take in no parameters 
// return <div id="ovelay"></div>
function createOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'overlay';

  return overlay;
}

// create actual form 
// take in no parameter 
// return <div class="new-item-form"></div>
function createForm() {
  // > new item form 
  const newItemForm = document.createElement('form');
  newItemForm.classList.add('new-item-form');
  // >> form header
  const formHeader = createFormHeader();
  // >> form row 1
  const row1 = createFormRow1();
  // >> form row 2 
  const row2 = createFormRow2();
  // >> form row 3 
  const row3 = createFormRow3();
  // >> form row 4
  const row4 = createFormRow4();
  // >> submit button 
  const submitButton = createSubmitButton();

  // append child to parent 
  newItemForm.appendChild(formHeader);
  newItemForm.appendChild(row1);
  newItemForm.appendChild(row2);
  newItemForm.appendChild(row3);
  newItemForm.appendChild(row4);
  newItemForm.appendChild(submitButton);

  return newItemForm;
}

// create form header 
// take in no parameters 
// return <div class="form-header"></div>
function createFormHeader() {
  // > form header
  const formHeader = document.createElement('div');
  formHeader.classList.add('form-header');
  // >> title 
  const title = document.createElement('h3');
  title.textContent = 'Add New Item';
  // >> close button 
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  // >>> icon 
  const icon = new Image();
  icon.src = Close;
  icon.alt = 'close icon';

  // append child to parent 
  closeButton.appendChild(icon);
  formHeader.appendChild(title);
  formHeader.appendChild(closeButton);

  return formHeader;
}

// create row 1 of form 
// take in no parameter 
// return <div class="from-row-1"></div>
function createFormRow1() {
  // > form row 1
  const row1 = document.createElement('div');
  row1.classList.add('form-row-1');
  // >> title input 
  const titleInput = createInputField('text', 'new-title', 'Title: Pay water bill');
  titleInput.required = true;
  // >> project input 
  const projectInput = createInputField('text', 'new-project', 'Project: Chores');
  
  // append child to parent 
  row1.appendChild(titleInput);
  row1.appendChild(projectInput);

  return row1;
}

// create row 2 of form 
// take in no parameter 
// return <div class="from-row-2"></div>
function createFormRow2() {
  // > form row 2 
  const row2 = document.createElement('div');
  row2.classList.add('form-row-2');
  // >> description input 
  const descriptionInput = document.createElement('textarea');
  descriptionInput.id = 'new-description';
  descriptionInput.placeholder = 'Description: Pay online at www.paybill.com';
  descriptionInput.rows = '3';
  
  // append child to parent 
  row2.appendChild(descriptionInput);

  return row2;
}

// create row 3 of form 
// take in no parameter 
// return <div class="from-row-3"></div>
function createFormRow3() {
  // > form row 3 
  const row3 = document.createElement('div');
  row3.classList.add('form-row-3');
  // >> label 
  const dueDateLabel = document.createElement('label');
  dueDateLabel.for = 'new-due-date';
  dueDateLabel.textContent = 'Due Date';
  // >> date input 
  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'new-due-date';

  // append child to parent 
  row3.appendChild(dueDateLabel);
  row3.appendChild(dueDateInput);

  return row3;
}

// create row 4 of form 
// take in no parameter 
// return <div class="from-row-4"></div>
function createFormRow4() {
  // > form row 4
  const row4 = document.createElement('div');
  row4.classList.add('form-row-4');
  // >> label 
  const priorityLabel = document.createElement('p');
  priorityLabel.textContent = 'Priority';
  // >> low radio 
  const lowRadio = createRadio('low');
  // >> medium radio 
  const mediumRadio = createRadio('medium');
  mediumRadio.querySelector('input').checked = true; // default to medium priority 
  // >> high radio 
  const highRadio = createRadio('high');

  // append child to parent 
  row4.appendChild(priorityLabel);
  row4.appendChild(highRadio);
  row4.appendChild(mediumRadio);
  row4.appendChild(lowRadio);

  return row4;
}

// create submit button 
// take no parameters 
// retrun <button class="form-submit-button"></button>
function createSubmitButton() {
  // > submit button 
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.classList.add('form-submit-button');
  // >> text 
  const text = document.createElement('p');
  text.textContent = 'Submit';
  // >> icon 
  const icon = new Image();
  icon.src = Submit;
  icon.alt = 'submit icon';

  // append child to parent 
  submitButton.appendChild(icon);
  submitButton.appendChild(text);

  return submitButton;
}

// create template for input 
// take in type, id, placeholder
// return input element 
function createInputField(type, id, placeholder) {
  const input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.placeholder = placeholder;

  return input;
}

// create radio div with input and label 
// take in 
// return <div class="priority-radio"></div>
function createRadio(id) {
  // > radio container 
  const radioContainer = document.createElement('div');
  radioContainer.classList.add('priority-radio');
  radioContainer.classList.add(`${id}`);
  // >> label 
  const label = document.createElement('label');
  label.for = id;
  label.textContent = id[0].toUpperCase() + id.substring(1); // convert to proper case 
  // >> input 
  const input = document.createElement('input');
  input.type = 'radio';
  input.id = id;
  input.name = 'priority';
  input.value = id;

  // append child to parent 
  radioContainer.appendChild(input);
  radioContainer.appendChild(label);

  return radioContainer;
}

export { createFormPage };