// ES6 variables

const name = 'John';
let age = 28;
console.log(`${name}, ${age}`);

name = 'Eva';  // error porque no se puede modificar una constante
age = 33;
console.log(`${name}, ${age}`);

// Code Blocks and Scope

// code block = código escrito entre dos { }.
// scope = es el alcance que tiene una variable dentro o fuera de un bloque de código.

{
    const a = 3;
    let b = 4;
}
console.log(a+b); 
// las variables no están definidas. Esto ocurre porque tanto 'a' como 'b' están 
// dentro del bloque. Esta es la razón por la que usamos 'return' en las funciones,
// para poder traer, fuera del bloque el valor de la/s variables. 

// Template Strings

console.log(`${name}, ${age}`); // `` se usan para determinar el Template String
 