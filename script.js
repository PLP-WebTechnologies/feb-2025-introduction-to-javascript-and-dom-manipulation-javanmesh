// Wait until the DOM is fully loaded before running the scripts
document.addEventListener('DOMContentLoaded', function() {

  // Change text content dynamically after a 2-second delay
  setTimeout(function() {
    const headerTitle = document.getElementById('header-title');
    headerTitle.textContent = 'JavaScript DOM Manipulation in Action!';
  }, 2000);

  // Modify CSS styles: toggle header text color when the button is clicked
  const changeTextBtn = document.getElementById('changeTextBtn');
  changeTextBtn.addEventListener('click', function() {
    const headerTitle = document.getElementById('header-title');
    // Toggle the text color between blue and the default color (black)
    headerTitle.style.color = (headerTitle.style.color === 'blue') ? 'black' : 'blue';
  });

  // Add or remove an element dynamically when the button is clicked
  const toggleParagraphBtn = document.getElementById('toggleParagraphBtn');
  toggleParagraphBtn.addEventListener('click', function() {
    const dynamicContent = document.getElementById('dynamicContent');
    // Check if a paragraph already exists; if so, remove it; if not, create one
    const existingParagraph = dynamicContent.querySelector('p');
    if (existingParagraph) {
      dynamicContent.removeChild(existingParagraph);
    } else {
      const newParagraph = document.createElement('p');
      newParagraph.textContent = 'This paragraph was added dynamically using JavaScript.';
      dynamicContent.appendChild(newParagraph);
    }
  });

});
