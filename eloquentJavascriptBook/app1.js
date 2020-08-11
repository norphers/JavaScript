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

for (let nunm = 0; nunm <= 6; nunm++) {
    console.log(char);
    char += '#';
}


// Eloquent JavaScript - Marijn Haverbeke, p. 37