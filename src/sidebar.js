import { addEventListenerToNavElement } from './sidebar-logic';

// create sidebar 
// take in no parameters 
// return no results 
function createSidebar(toDoList) {
  // > container 
  const container = document.createElement('div');
  container.classList.add('sidebar');
  // >> all nav
  const allNav = createAllNav();
  // >> projects nav 
  const projectNav = createProjectNav(toDoList);

  // append child to parent 
  container.append(allNav);
  container.append(projectNav);
  document.querySelector('.content').appendChild(container);

  // addEventListener to nav h3 
  addEventListenerToNavElement(toDoList);
}

// create nav for all project
// take in no parameter 
// return all div 
function createAllNav() {
  // > all nav
  const allNav = document.createElement('div');
  allNav.classList.add('all-nav');
  // >> title
  const title = document.createElement('h2');
  title.textContent = 'Summary';
  // >> home
  const home = document.createElement('h3');
  home.textContent = 'Home';
  // >> today 
  const today = document.createElement('h3');
  today.textContent = 'Today';
  // >> this week 
  const thisWeek = document.createElement('h3');
  thisWeek.textContent = 'This Week';

  // append child to parent 
  allNav.appendChild(title);
  allNav.appendChild(home);
  allNav.appendChild(today);
  allNav.appendChild(thisWeek);

  return allNav;
}

// create nav for projects
// take in no parameter 
// return project nav div 
function createProjectNav(toDoList) {
  // > projects nav
  const projectNav = document.createElement('div');
  projectNav.classList.add('project-nav');
  // >> title
  const title = document.createElement('h2');
  title.textContent = 'Projects';
  // >> projects 
  // done in loop

  // append child to parent 
  projectNav.appendChild(title);
  for (let i = 0; i < toDoList.getUniqueProjects().length; i++) {
    const nav = document.createElement('h3');
    nav.textContent = toDoList.getUniqueProjects()[i];
    projectNav.appendChild(nav);
  }

  return projectNav;
}

export { createSidebar };