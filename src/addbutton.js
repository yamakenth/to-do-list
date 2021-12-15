import Plus from './plus.png';

function createAddButton(parent) {
  const button = document.createElement('button');
  button.type = 'button';
  const plus = new Image();
  plus.src = Plus;
  plus.alt = 'plus sign to add new item';
  plus.classList.add('plus');
  button.appendChild(plus);
  parent.appendChild(button);
}

export { createAddButton };

/*
<button type="button">
  <img class="plus" src="../src/plus.png" alt="plus sign to add new item">
</button>
*/