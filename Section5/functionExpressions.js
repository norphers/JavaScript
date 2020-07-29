// functions like expressions
var test = function(){
    return 'var test = function(){}';
}

console.log(test());

//undifined arguments
var testUndifined = function(n){
    return 'Hello ' + n;
}
console.log(testUndifined());
// >_ node functionExpressions.js ==> Hello undifined

//null arguments
var a = null;
var testNull = function(n){
    return 'Hello ' + n;
}
console.log(testNull(a));
// >_ node functionExpressions.js ==> Hello null

//default arguments
var sum =  function(a,b,c = 4){
    return a+b+c;
}
console.log(sum(10,4));     // a=10, b=4, c=default value
console.log(sum(10,4,10));  // a=10, b=4, c=10
console.log(sum(10,4,null));  // a=10, b=4, c=null => sum a+b
