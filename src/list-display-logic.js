// clear current display 
// take in no parameters 
// return no results 
function clearCurrentDisplay() {
  try {
    const display = document.querySelector('.display');
    document.querySelector('body').removeChild(display);
  }
  catch(err) { }
}

export { clearCurrentDisplay };