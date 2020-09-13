/*

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

// Code:

let char = '#';

for (let num = 1; num <= 7; num++) {
    console.log(char);
    char += '#';
}


// Eloquent JavaScript - Marijn Haverbeke, p. 37

/* 

Solution from https://eloquentjavascript.net/code/#2.1

for (let line = "#"; line.length < 8; line += "#") {
    console.log(line);
}

*/