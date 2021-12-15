import Logo from './check-box.png';

function createHeader(parent) {
  // img div 
  const logo = new Image();
  logo.src = Logo;
  logo.alt = 'large checkbox';
  logo.classList.add('logo');
  // title 
  const title = document.createElement('h1');
  title.textContent = 'To Do List';
  
  // add to parent 
  parent.appendChild(logo);
  parent.appendChild(title);
}

export { createHeader };

/*
<img class ="logo" src="../src/check-box.png" alt="large checkbox">
<h1>To Do List</h1>
*/