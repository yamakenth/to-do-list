// close form on click 
// take in no parameters 
// return no results 
function addEventListenerToCloseButton() {
  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    document.querySelector('#overlay').classList.remove('active');
    document.querySelector('.new-item-form').classList.remove('active');
  });
}

export { addEventListenerToCloseButton };