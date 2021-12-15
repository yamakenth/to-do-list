function displayFrom() {
  // > whole page 
  const formPage = document.createElement('div');
  formPage.classList.add('form-page');

  // >> overlay 
  const overlay = document.createElement('div');
  overlay.id = 'overlay';

  // >> new item form 
  const newItemForm = document.createElement('div');
  newItemForm.classList.add('new-item-form');

  // >>> form header
  // >>>> title 
  // >>>> close button 
  // >>>>> icon 
  
  // >>> form row 1
  // >>>> title input 
  // >>>> project input 
  // >>> form row 2 
  // >>>> description input 
  // >>> form row 3 
  // >>>> label 
  // >>>> date input 
  // >>> form row 4
  // >>>> label 
  // >>>>> priotity buttons 
  // >>>>>> low 
  // >>>>>> medium 
  // >>>>>> high 
  // >>> form row 5
  // submit button 

  
  // append child to parent 
  formPage.appendChild(overlay);
  formPage.appendChild(newItemForm);
  return formPage;
}

export { displayFrom };

/*
<form class="new-item-form">
  <div class="form-header">
    <h3>Add New Item</h3>
    <button class="form-close">X</button>
  </div>
  <input type="text" id="new-title" placeholder="Title" required>
  <input type="text" id="new-details" placeholder="Details">
  <input type="date" id="new-due-date">
  <input type="range" id="new-priority" min="0" max="2" value="1" step="1">
  <div class="form-buttons">
    <button type="submit" class="submit-new-item">Submit</button>
    <button type="button" class="form-close cancel-new-item">Cancel</button>
  </div>
</form>
<div id="overlay"></div>
*/