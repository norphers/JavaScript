// console.log(document);

//console.log(document.getElementById('header-title'));

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

//console.log(header);

headerTitle.textContent = 'Hola';
headerTitle.innerText = 'Bye';

var items = document.getElementsByTagName('li');
items[2].textContent = 'Test 2';

// querySelector --> selector de CSS
var header = document.querySelector('#main-header');
header.style.border = 'solid 4px #000';
header.style.borderBottom = 'solid 8px #ccc';


// querySelectorAll