////////////////////////////////////////////////////////

function welcome() {
    console.log("Welcome to JavaScript functions!")
}
welcome();



function greetings() {
    return 'Hello from return function.';
}
var message = greetings();
console.log(message);


////////////////////////////////////////////////////////

// function parts;
// inputs(arguments), code, output(return)


function powNumber(number) {
    var pow = number*number 
    return pow;
}
var number = 3;
console.log(powNumber(number));
console.log(powNumber(5));


// 32F = 0C, 68F=20C


function convertFarenheitCelsius(farenheitGrade){
    var celsiusGrade = (farenheitGrade - 32) * 5 / 9;
    return celsiusGrade;
}
var temperature1 = convertFarenheitCelsius(32);
var temperature2 = convertFarenheitCelsius(68);
console.log(temperature1);
console.log(temperature2);
console.log(convertFarenheitCelsius(180));


