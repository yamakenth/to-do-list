import Logo from './img/check-box.png';

function createHeader() {
  // > header div 
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header');
  // >> logo 
  const logo = new Image();
  logo.src = Logo;
  logo.alt = 'large checkbox';
  logo.classList.add('logo');
  // >> title 
  const title = document.createElement('h1');
  title.textContent = 'To Do List';
  // append child to parent 
  headerContainer.appendChild(logo);
  headerContainer.appendChild(title);

  return headerContainer;
}

export { createHeader };

/*
<div class="header">
  <img class ="logo" src="../src/check-box.png" alt="large checkbox">
  <h1>To Do List</h1>
</div>
*/