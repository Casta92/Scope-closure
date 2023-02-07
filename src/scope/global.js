// Variables

var a; // Estamos declarando
var b= 'b'; // Estamos declarando y asignando
b= 'bb'; //Reasignación
var a= 'aa' // Redeclaración

//Global Scope

var fruit = 'Apple'; // Global

function bestFruit(){
    console.log(fruit)
}

bestFruit();

//Crear una variable global dentro de una función

function countries(){
    country='Colombia'; //Asignación de un valor de manera global
    console.log(country)
}
countries();
console.log(country)

