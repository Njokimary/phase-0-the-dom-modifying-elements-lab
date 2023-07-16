// Remove the 'main' element with id 'main'
var mainElement = document.getElementById('main');
mainElement.remove();

// Create a new header element
var newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new header to the body
document.body.appendChild(newHeader);
