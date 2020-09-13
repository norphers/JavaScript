/*

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, 
print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.absWhen you have that working, 
modify your program to print "FizzBuzz"for numbers that ara divisible by 3 and 5 (and stil print "Fizz" or "Buzz" for numbers 
divisible by only one of those).

*/

for (let num = 1; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 != 0) console.log('Fizz');
    else if (num % 5 == 0 && num % 3 != 0) console.log('Buzz');
    else if (num % 3 == 0 && num % 5 == 0) console.log('FizzBuzz');
    else console.log(num);
}

/*
solution:

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

*/