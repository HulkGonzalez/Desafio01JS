//Solicitud de datos

//Se pide temperatura en grados Celcius a cliente
let Celcuis = parseInt(prompt("Ingrese la temperatura en grados Celcius ° <- "));
  
//Se transforma grados Celcius a Kelvin
  let kelvin = Celcuis + 273.15;

//Se transforma grados Celcius a Farenheit
  let farenheit = (Celcuis * 9) / 5 + 32;
  
//Vista por consola

console.log(`Conversion grados Celcius ${Celcuis}:
  Grados Kelvin ${kelvin}
  Grados Farenheit ${farenheit}
  `);