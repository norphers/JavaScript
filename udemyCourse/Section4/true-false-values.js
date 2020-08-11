// false values: undifined, null, 0, ''
// true  values: not false values

var age;
age= '10';

if(age){
    console.log("defined");
} else {
    console.log("not defined");
}

// == ambos operadores son iguales.

if(age == 10){ 
    console.log("variable con coersión");
} else {
    console.log("variable sin coersión");
}

// === ambos operadores son iguales y tienen el mismo tipo

if(age === 10){
    console.log("variable con coersión");
} else {
    console.log("variable sin coersión");
}