import { createListDisplay } from "./list-display";

// display different to do lists based on click 
// take in no parameters 
// return no results 
function addEventListenerToNavElement(toDoList) {
  const navs = document.querySelectorAll('.sidebar h3');
  navs.forEach((nav) => {
    nav.addEventListener('click', (e) => {
      // grab name of nav
      const projectName = e.target.textContent;
      
      if (projectName === 'Home') {
        createListDisplay(toDoList); 
      } else if (projectName === 'Today') {
        createListDisplay(toDoList.todaysToDoList());
      } else if (projectName === 'This Week') {
        createListDisplay(toDoList.thisWeeksToDoList());
      } else {
        /*
        // get to do list of selected project
        const grouopedToDoList = toDoList.groupByProject();
        const currToDoList = grouopedToDoList[projectName];
        // create display of selected project 
        createListDisplay(currToDoList);
        */
        console.log('yeet');
      }
     
      // change display title 
      const toDoTitle = document.querySelector('.to-do-title');
      toDoTitle.textContent = projectName;
    });
  });
}

export { addEventListenerToNavElement };