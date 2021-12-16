// add ability to open and close from with add button, form close button, and submit button
// take in document 
// return no results 
function openAndCloseForm(document) {
  // get element 
  const overlay = document.querySelector('#overlay');
  const newItemForm = document.querySelector('.new-item-form');
  const addButton = document.querySelector('.add-button');
  const formCloseButton = document.querySelector('.close-button');
  
  // eventListner on add button 
  addButton.addEventListener('click', () => {
    openForm(overlay, newItemForm);
  });
  
  // eventListener on form close button 
  formCloseButton.addEventListener('click', () => {
    closeForm(overlay, newItemForm);
  });
  
  // eventListener on form submit button 
  newItemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closeForm(overlay, newItemForm);
  });
}

// add active to overlay and form classes 
// take in overlay and form
// return no results 
function openForm(overlay, newItemForm) {
  overlay.classList.add('active');
  newItemForm.classList.add('active');
  newItemForm.querySelector('#new-title').select();
}

// remove active from overlay and form classes 
// take in overlay and form
// return no results 
function closeForm(overlay, newItemForm) {
  resetInputFields(newItemForm);
  overlay.classList.remove('active');
  newItemForm.classList.remove('active');
}

// reset input fields for new input 
// take in form
// return no results 
function resetInputFields(newItemForm) {
  newItemForm.querySelector('#new-title').value = '';
  newItemForm.querySelector('#new-project').value = '';
  newItemForm.querySelector('#new-description').value = '';
  newItemForm.querySelector('#new-due-date').value = null;
  newItemForm.querySelector('#medium').checked = true;
}

export { openAndCloseForm };