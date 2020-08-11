var student1 = 'John';
var student2 = 'Susana';

var averageJohn = (14 + 8 + 16) / 3;
var averageSusana = (12 + 18 + 10) / 3;

console.log(averageJohn);
console.log(averageSusana);

averageJohn>13 ? console.log("John pass the exam.") : console.log("John dodn't pass the exam.");
averageSusana>13 ? console.log("Susana pass the exam.") : console.log("Susana dodn't pass the exam.");

if(averageJohn>averageSusana) {
    console.log('John is the best')
} else if (averageSusana>averageJohn) {
    console.log('Susana is the best.');
} else {
    console.log('John and Susana have the same average.')
}
