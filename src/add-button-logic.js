// open form on click 
// take in no parameter 
// return no result 
function addEventListenerToAddButton() {
  const addButton = document.querySelector('.add-button');
  addButton.addEventListener('click', () => {
    document.querySelector('#new-title').select();
    document.querySelector('#overlay').classList.add('active');
    document.querySelector('.new-item-form').classList.add('active');
    document.querySelector('.form-header h3').textContent = 'Add New Items'
    document.querySelector('.new-item-form button[type=submit] p').textContent = 'Submit';
  });
}

export { addEventListenerToAddButton };