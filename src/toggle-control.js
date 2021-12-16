// add ability to toggle completion status 
// take in document 
// return no results 
function addToggleControl(document, toDoList) {
  // check box 
  const checkBoxes = document.querySelectorAll('.item input[type="checkbox"]');
  // toggle for each item 
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const index = e.target.parentNode.parentNode.dataset.indexNumber;
      toDoList.list[index].toggleIsCompleted();
    });
  });
}

export { addToggleControl };