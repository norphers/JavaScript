// ARRAYS - SECTION 6

var drinks = ['coffee', 'tea', 'lemonade'];
var food = new Array('cake', 'cookies', 'sandwich');
console.log(drinks[0]);

var names = ['John', 'Maria', 'Mike', 'Samantha'];
var vegetables = new Array('Tomato', 'Lettuse', 'Carrot');

console.log(names[0], vegetables[1]);

console.log(names[1]);
names[1] = 'Caroline';
console.log(names[1]);

console.log(names.length);

// ARRAY OPERATIONS

var fruits = ['pear', 'apple', 'grape', 'watermelon'];
console.log(fruits);

fruits.push('orange'); // afegeix al final 
console.log(fruits);

fruits.unshift('strawberries'); // afegeix a l'inici
console.log(fruits);

fruits.pop(); // elimina la última posició
console.log(fruits);

fruits.shift(); // elimina la primera posició
console.log(fruits);

var pos = fruits.indexOf('grape'); //indica la posició de 'grape'
console.log(pos);

fruits.splice(1,2); // a partir de l'índex [1], elimina 2, és a dir fruits[1] i fruits[2] 
console.log(fruits);

// for 
for(var i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}

// for each
fruits.forEach(function(element, index, array) {
    console.log(element, index);
});

var diffTypesArray = ['JavaScript', 123, null, 'programming', 13.7, true];

console.log(diffTypesArray);
