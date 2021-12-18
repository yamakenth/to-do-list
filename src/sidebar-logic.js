import { createListDisplay } from "./list-display";
import { getWeek, isToday, parseISO } from 'date-fns';

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
        const items = document.querySelectorAll('.item');
        items.forEach((item) => {
          if (item.dataset.project !== projectName) {
            item.classList.remove('inactive');
          }
        });
      } else if (projectName === 'Today') {
        const items = document.querySelectorAll('.item');
        items.forEach((item) => {
          item.classList.remove('inactive');
          if (!isToday(parseISO(item.dataset.dueDate))) {
            item.classList.add('inactive');
          }
        });
      } else if (projectName === 'This Week') {
        const items = document.querySelectorAll('.item');
        items.forEach((item) => {
          item.classList.remove('inactive');
          if (getWeek(parseISO(item.dataset.dueDate)) !== getWeek(new Date())) {
            item.classList.add('inactive');
          }
        });
      } else {
        const items = document.querySelectorAll('.item');
        items.forEach((item) => {
          item.classList.remove('inactive');
          if (item.dataset.project !== projectName) {
            item.classList.add('inactive');
          }
        });
      }
     
      // change display title 
      const toDoTitle = document.querySelector('.to-do-title');
      toDoTitle.textContent = projectName;
    });
  });
}

export { addEventListenerToNavElement };