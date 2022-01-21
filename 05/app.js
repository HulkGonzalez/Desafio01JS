//Solicitud de datos

//Se pide 5 numeros al cliente
let num01 = parseInt(prompt("Ingrese primer numero"));
let num02 = parseInt(prompt("Ingrese segundo numero"));
let num03 = parseInt(prompt("Ingrese tercer numero"));
let num04 = parseInt(prompt("Ingrese cuarto numero"));
let num05 = parseInt(prompt("Ingrese quinto numero"));

//Se suman todos los numeros
let suma = num01 + num02 + num03 + num04 + num05;

//Se promedia el resultado de la suma
let promedio = suma / 5 ;

//Vista por consola

console.log(`El resultado es: 
  Suma ${suma}
  Promedio ${promedio}
  `);


