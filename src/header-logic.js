import { loadData } from './load-data';
import { createListDisplay } from './list-display';

// addEventListener to dummy data button 
// take in toDoList
// return no result 
function addEventListenerToDummyDataButton(toDoList) {
  const button = document.querySelector('.dummy-data-button');
  button.addEventListener('click', () => {
    loadData(toDoList);
    createListDisplay(toDoList);
  }); 
}

export { addEventListenerToDummyDataButton };