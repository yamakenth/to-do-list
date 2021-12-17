// close form on click 
// take in no parameters 
// return no results 
function addEventListenerToCloseButton() {
  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    resetInputFields();
    document.querySelector('#overlay').classList.remove('active');
    document.querySelector('.new-item-form').classList.remove('active');
  });
}

// reset input fields for new input 
// take in form
// return no results 
function resetInputFields() {
  document.querySelector('#new-title').value = '';
  document.querySelector('#new-project').value = '';
  document.querySelector('#new-description').value = '';
  document.querySelector('#new-due-date').value = null;
  document.querySelector('#medium').checked = true;
}

export { addEventListenerToCloseButton };