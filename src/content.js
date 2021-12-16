// create content div for navbar and display 
// take in no parameters 
// return no results 
function createContent() {
  const content = document.createElement('div');
  content.classList.add('content');
  document.querySelector('body').appendChild(content);
}

export { createContent };