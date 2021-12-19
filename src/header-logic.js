import { loadData } from './load-data';
import { createListDisplay } from './list-display';
import { saveDataToLocalStorage } from './storage';
import { createSidebar } from './sidebar';

// addEventListener to dummy data button 
// take in toDoList
// return no result 
function addEventListenerToDummyDataButton(toDoList) {
  const button = document.querySelector('.dummy-data-button');
  button.addEventListener('click', () => {
    loadData(toDoList);
    createListDisplay(toDoList);
    createSidebar(toDoList);
    saveDataToLocalStorage(toDoList);
  }); 
}

export { addEventListenerToDummyDataButton };