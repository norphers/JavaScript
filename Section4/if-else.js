// if-else

//SECTION 1

var name="John";
var status = "single";
var age = 13;

if(status === "married")
{
    console.log(name + " is married.");
} else {
    console.log(name + " is single.");
}

/* SECTION 2

// age<12 = child, 12>age<18 = tenager, age>18<60 = adult, age>60 = old.

if(age>0 && age<12) {
    console.log('You are a child.');
}
else if(age>12 && age<18) {
    console.log('You are a tenager.');
}
else if(age>=18 && age<=60) {
    console.log('You are an adult.');
}
else if (age<60 && age>120) {
    console.log('You are an old man.');
} else {
    console.log("There aren't any person who has " + age + " years old.");
}
*/

// SECTION 3

// ternary operator
age >= 18 ? console.log(name + " is an adult.") : console.log(name + " isn't an adult.")
