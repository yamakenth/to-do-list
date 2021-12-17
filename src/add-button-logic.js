// open form on click 
// take in no parameter 
// return no result 
function addEventListenerToAddButton() {
  const addButton = document.querySelector('.add-button');
  addButton.addEventListener('click', () => {
    // focus to first input field 
    document.querySelector('#new-title').select();
    // show form 
    document.querySelector('#overlay').classList.add('active');
    document.querySelector('.new-item-form').classList.add('active');
    // change header and submit button text content 
    document.querySelector('.form-header h3').textContent = 'Add New Items'
    document.querySelector('.new-item-form button[type=submit] p').textContent = 'Submit';
    // add/change form submission type 
    document.querySelector('.new-item-form').dataset.submissionType = 'add-item';
  });
}

export { addEventListenerToAddButton };