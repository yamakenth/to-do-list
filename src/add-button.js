import Plus from './img/plus.png';

// create button to add new to do item 
// take in no parameters 
// return no results 
function createAddButton() {
  // > button 
  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('add-button');
  // >> button icon 
  const plus = new Image();
  plus.src = Plus;
  plus.alt = 'plus sign';

  // append child to parent 
  button.appendChild(plus);
  document.querySelector('body').appendChild(button);

  return button;
}

export { createAddButton };