// details button on click, show form then update if input fields are changed 
// take in no parameters 
// return no results 
function addEventListenerToDetailsButton(toDoList) {
  const detetailButtons = document.querySelectorAll('.detail-button');
  detetailButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const currItem = toDoList.list[e.target.parentNode.parentNode.parentNode.dataset.indexNumber];
      displayForm();
      populateForm(currItem);
      
    });
  });

}

// display from 
// take in no parameters 
// return no results 
function displayForm() {
  document.querySelector('#overlay').classList.add('active');
  document.querySelector('.new-item-form').classList.add('active');
}

// populate form with data from current item 
// take in currItem
// return no results
function populateForm(currItem) {
  // change title and submit button text 
  document.querySelector('.form-header h3').textContent = 'Details'
  document.querySelector('.new-item-form button[type=submit] p').textContent = 'Edit';
  // populate fields 
  document.querySelector('#new-title').value = currItem.title;
  document.querySelector('#new-project').value = currItem.project;
  document.querySelector('#new-description').value = currItem.description;
  document.querySelector('#new-due-date').value = currItem.dueDate;
  document.querySelector(`#${currItem.priority}`).checked = true;
  // add/change submission type of form 
  document.querySelector('.new-item-form').dataset.submissionType = 'edit-item';
}

export { addEventListenerToDetailsButton };