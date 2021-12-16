import Plus from './img/plus.png';

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

  return button;
}

export { createAddButton };