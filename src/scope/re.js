//Redeclaración y Reasignación
var firtName; //Declarando, por lo que automaticamente se le asigna un valor undefined
firtName = 'Oscar'; //Asignar
console.log(firtName);

var lastName = 'Castañeda'; //Declaracion y asignacion
lastName = 'Maya'; //Reasignar
console.log(lastName);

var secondName= 'Felipe'; //Declaracion y asignacion
var secondName= 'Carlos';//Redeclarar
console.log(secondName); 

//Let
let fruit= 'Apple'; //Declaracion y asignacion
fruit= 'Kiwi'; // Reasignar
console.log(fruit); 
let fruit = 'Banana'// Con let no se puede redeclarar
console.log(fruit); 

// const 
const animal = 'Dog'; //Declaracion y asignacion
animal = 'Cat'
console.log(animal); // Con const no se puede ni reasignar ni declarar. const es una variable única dentro del bloque de código

