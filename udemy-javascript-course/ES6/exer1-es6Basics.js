//VARIABLES LET & CONST

const name = 'John';
let age = 28;
console.log(`${name}, ${age}`);

name = 'Eva';  // error porque no se puede modificar una constante
age = 33;
console.log(`${name}, ${age}`);


//CODE BLOCK AND SCOPE

/*
code block = código escrito entre dos { }.
scope = es el alcance que tiene una variable dentro o fuera de un bloque de código.about.
*/

{
    const a = 3;
    let b = 4;
}
console.log(a+b);

/*
las variables no están definidas. Esto ocurre porque tanto 'a' como 'b' están 
dentro del bloque. Esta es la razón por la que usamos 'return' en las funciones,
para poder traer, fuera del bloque el valor de la/s variables.
*/

//TEMPLATE STRINGS

console.log(`${name}, ${age}`); // `` se usan para determinar el Template String

//STRING FUNCTIONS

let name = 'John';
let surname = 'Doe';

let completeName = `${name}, ${surname}`;
console.log(completeName);
console.log(`${name}, `.repeat(5)); // repite 5 veces el ${name}
console.log(completeName.includes('Do'));
console.log(completeName.startsWith('Br'));
console.log(completeName.startsWith('Jo'));
console.log(completeName.endsWith('oe'));

//ARROW FUNCTIONS  ( ) => { }

const years = [2000, 2005, 2008, 2010, 2015, 2019];

//ES5
var year5 = years.map(function(year) {
    return 2020-year;
});
console.log(year5);

//ES6
let year6 = years.map(year => 2020 - year);
console.log(year6);

year6 = years.map((year, index)=>`Age ${index+1}: ${2020-year}.`);
console.log(year6);

year6 = years.map(
    (year, index) => {
        const currentYear = new Date().getFullYear();
        const age = currentYear - year;
        return `id: ${index + 1}, age: ${age}.`;
    });
console.log(year6);

//let pow = ((num) => { return num * num; });   <==>   let pow = (num) => num * num;
let pow = (num) => num * num;
console.log(pow(5));

//DESTRUCTURING

const human = {
    name: 'John',
    age: 25
};

const { name, age } = human;

console.log(name);
console.log(age);

//MAPS

/*
Los mapas son estructuras de datos parecidos a los arrays pero, en vez de trabajar
con ínices y valores lo hace con 'keys' (claves) y valores. Un valor está relacionado
a una clave. La diferencia es que mientras que los índices siempre son de tipo númerico,
las key pueden ser de tipo numérico, string, object...
*/

const data = new Map();

data.set('name', 'Joe'); // para asignar 'keys' y 'values' utilizamos el método .set()
data.set('age', 30);
data.set(1, 'joe@example.com');
data.set(2, 'joe.company@example.com');

console.log(data.get('name'));
console.log(data.size);
data.delete(2);
console.log(data.size);
data.clear();

// un map lleva integrado el metodo forEach para poder recorrerlo

data.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// SPREAD OPERATOR

const addition = function (a, b, c, d) {
    return a + b + c + d;
}

const operation = addition(10, 20, 30, 40);
console.log(operation);

const values = [10, 20, 30, 40]
const operation2 = addition(...values);
console.log(operation2);

const rrhh = ['John', 'Maria', 'Markus'];
const marketing = ['Helen', 'Mike', 'Alex'];

const employees = [...rrhh, ...marketing];
console.log(employees);