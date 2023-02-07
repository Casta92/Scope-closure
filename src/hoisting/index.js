// Hoisting
// Para evitar errores con el hoisting, se recomienda crear las funciones y las variables al inicio del código, ya sean declaradas con var, let o const (aún si las últimas dos no sufren de hoisting).


console.log(nameOfDog);
var nameOfDog = 'Pongo'; // Undefined

console.log(nameOfDog1);
let nameOfDog1 = 'Pongo'; //Error

console.log(nameOfDog2);
const nameOfDog2 = 'Pongo'; //Error