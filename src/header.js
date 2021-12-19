import Logo from './img/check-box.png';

// create page header 
// take in no parameters 
// return no results 
function createHeader() {
  // > header div 
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header');
  // >> left contaier 
  const leftContainer = createLeftContainer();
  // >> right contaier 
  const rightContainer = createRightContainer();

  // append child to parent 
  headerContainer.appendChild(leftContainer);
  headerContainer.appendChild(rightContainer);
  
  document.querySelector('body').appendChild(headerContainer);
}

// create left container 
// take in no parameters 
// return <div class="left-container"></div>
function createLeftContainer() {
  // > container
  const leftContainer = document.createElement('div');
  leftContainer.classList.add('left-container');
  // >> logo 
  const logo = new Image();
  logo.src = Logo;
  logo.alt = 'large checkbox';
  logo.classList.add('logo');
  // >> title 
  const title = document.createElement('h1');
  title.textContent = 'To Do List';

  // append child to parent 
  leftContainer.appendChild(logo);
  leftContainer.appendChild(title);

  return leftContainer;
}

// create right container 
// take in no parameters 
// return <div class="right-container"></div>
function createRightContainer() {
  // > container 
  const rightContainer = document.createElement('div');
  rightContainer.classList.add('right-container');
  // > button 
  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('dummy-data-button');
  button.textContent = 'Populate list with dummy data';
  
  // append child to parent 
  rightContainer.appendChild(button);
  
  return rightContainer;
}

export { createHeader };