//DATA

var weightJohn = 72;
var heightJohn = 1.72;

var weightAlex = 89;
var heightAlex = 1.75;

// IMC = weight/height^2

var imcJohn, imcAlex;

imcJohn = weightJohn / (heightJohn*heightJohn);
imcAlex = weightAlex / (heightAlex*heightAlex);

console.log("John IMC: " + imcJohn);
console.log("Alex IMC: " + imcAlex);

var comparingImc = imcJohn>imcAlex;
console.log("Does John have higher IMC than Alex? " + comparingImc);
