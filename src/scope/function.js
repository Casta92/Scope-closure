function gretting (){
    let userName= 'Andres';
    console.log(userName);

    if(userName === 'Ana'){
        console.log(`Hello ${userName}!`)
    }
    else{
        console.log("No eres Ana")
    }
}

gretting()

console.log(userName); //Seria un error, muestro que la variable userName no está declarada por fuera de la función
